import { useState } from 'react';
import { toast } from 'react-toastify';
import { Box, Button, List, ListItem, Typography, styled } from '@mui/material';

import { InputElement, InputPatternFormat } from './InputEl';
import { addContact } from 'APIServices.js/APIServices';
import { validateName } from 'utils/validateName';
import { validateTelephone } from 'utils/validateTelephone';

const style = {
  box: {
    ml: 'auto',
    mr: 'auto',
    mb: '50px',
    width: { sm: '299px', md: '450px' },
    maxWidth: { xs: '299px', sm: '299px', md: '450px' },
  },
  list: { marginBottom: { xs: '30px', md: '40px' } },
  listItem: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    '&:not(:last-child)': { marginBottom: '35px' },
  },
  typography: {
    mb: 0.5,
    fontSize: { xs: '16px', md: '20px' },
    fontWeight: 500,
  },
  button: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  helperText: {
    position: 'absolute',
    top: { xs: '75px', md: '80px' },
    color: '#e53935',
    fontSize: { xs: '12px', md: '14px' },
  },
};

const Label = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.dark,
}));

export const AddContactForm = ({ contactsList, setContactsList }) => {
  const [errorStateName, setErrorStateName] = useState(false);
  const [helperTextName, setHelperTextName] = useState('');

  const [errorStateTel, setErrorStateTel] = useState(false);
  const [helperTextTel, setHelperTextTel] = useState('');

  const [number, setNumber] = useState('');

  const onNumberChange = values => {
    setNumber(values.formattedValue);
  };

  function checkName(contact) {
    const isExisting = contactsList?.find(
      item => item.name.toLowerCase() === contact.name.toLowerCase()
    );

    return isExisting;
  }

  function checkNumber(contact) {
    const isExisting = contactsList?.find(
      item => item.number === contact.number
    );

    return isExisting;
  }

  function checkContact(contact) {
    const isNameExisting = checkName(contact);
    const isNumberExisting = checkNumber(contact);

    if (isNameExisting) {
      toast.warn(`${contact.name} is already in the list of contacts`, {
        toastId: 'checkNameWarn',
      });
    } else if (isNumberExisting) {
      toast.warn(
        `Telephone number ${contact.number} is already in the list of contacts`,
        { toastId: 'checkNumberWarn' }
      );
    }
    return {
      isNameExisting,
      isNumberExisting,
    };
  }

  const onSubmit = e => {
    e.preventDefault();
    const form = e.target;

    const name = form.elements.name.value.trim();
    const telNumber = number;

    const contact = {
      name,
      number: telNumber,
    };
    const { isNameExisting, isNumberExisting } = checkContact(contact);

    const { nameHelperText, nameErrorState } = validateName(name);
    setHelperTextName(nameHelperText);
    setErrorStateName(nameErrorState);

    const { telHelperText, telErrorState } = validateTelephone(telNumber);
    setHelperTextTel(telHelperText);
    setErrorStateTel(telErrorState);

    if (
      !isNameExisting &&
      !isNumberExisting &&
      !nameErrorState &&
      !telErrorState
    ) {
      addNewContact(contact);

      form.reset();
      setNumber('');
    }
  };

  const addNewContact = async contact => {
    try {
      const response = await addContact(contact);

      if (response.status === 201) {
        toast.success(
          `${contact.name} has successfully been added to the contacts`,
          { toastId: 'addNewContactSuccess' }
        );
        const newContacts = [response.data, ...contactsList].sort(
          (firstContact, secondContact) =>
            firstContact.name.localeCompare(secondContact.name)
        );
        setContactsList(newContacts);
      }
    } catch (e) {
      console.log(e);
      toast.error('Something has gone wrong. Try again', {
        toastId: 'addNewContactError',
      });
    }
  };
  return (
    <Box
      component="form"
      sx={style.box}
      noValidate
      autoComplete="off"
      onSubmit={onSubmit}
    >
      <List sx={style.list}>
        <ListItem disablePadding sx={style.listItem}>
          <Label sx={style.typography}>Name</Label>
          <InputElement
            type="text"
            name="name"
            title="Name may contain only letters, digits, apostrophes, hyphens and spaces"
            placeholder="Enter a name"
            autoComplete="off"
            error={`${errorStateName}`}
          />
          {errorStateName && (
            <Typography sx={style.helperText}>{helperTextName}</Typography>
          )}
        </ListItem>
        <ListItem disablePadding sx={style.listItem}>
          <Label sx={style.typography}>Telephone number</Label>
          <InputPatternFormat
            type="tel"
            name="number"
            format="+ ##(###) ###-##-##"
            title="+ ##(###) ###-##-##"
            mask="_"
            placeholder="Enter a telephone number"
            autoComplete="off"
            onValueChange={onNumberChange}
            value={number}
            error={`${errorStateTel}`}
          />
          {errorStateTel && (
            <Typography sx={style.helperText}>{helperTextTel}</Typography>
          )}
        </ListItem>
      </List>

      <Button variant="contained" type="submit" sx={style.button}>
        Add the contact
      </Button>
    </Box>
  );
};
