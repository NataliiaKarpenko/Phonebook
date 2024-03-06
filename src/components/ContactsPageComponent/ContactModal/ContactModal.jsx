import { useState } from 'react';
import {
  Modal,
  Backdrop,
  Box,
  Fade,
  Button,
  Typography,
  styled,
} from '@mui/material';

import { validateName } from 'utils/validateName';
import { validateTelephone } from 'utils/validateTelephone';
import { editContact } from 'APIServices.js/APIServices';
import { useIsLoggedIn } from 'components/IsLoggedInContext';
import { TelInputPatternFormat } from './TelInputPatternForm';
import { NameInputTextField } from './NameInputTextField';
import { toast } from 'react-toastify';

const style = {
  box: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: 'calc(100% - 68px)', sm: '250px', md: '300px' },
    maxWidth: '50%',
    bgcolor: 'background.paper',
    border: '2px solid #3d6cb9',
    borderRadius: 10,
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  typography: {
    mb: 1,
    textAlign: 'center',
    fontSize: { xs: '18px', md: '20px' },
    fontWeight: 600,
  },
  button: { padding: '6px 40px' },
};

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.dark,
}));

export default function ContactModal({
  contactId,
  contactName,
  contactNumber,
  open,
  setOpen,
  contactsList,
  setContactsList,
}) {
  const { setIsRefreshing } = useIsLoggedIn();
  const [errorStateName, setErrorStateName] = useState(false);
  const [helperTextName, setHelperTextName] = useState('');

  const [errorStateTel, setErrorStateTel] = useState(false);
  const [helperTextTel, setHelperTextTel] = useState('');

  const onSubmitModalForm = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value.trim();
    const number = form.elements.number.value.trim();

    const contact = {
      name,
      number,
    };

    const { nameHelperText, nameErrorState } = validateName(name);
    setHelperTextName(nameHelperText);
    setErrorStateName(nameErrorState);

    const { telHelperText, telErrorState } = validateTelephone(number);
    setHelperTextTel(telHelperText);
    setErrorStateTel(telErrorState);

    if (!telErrorState && !nameErrorState) {
      onEditingContact(contactId, contact);
      handleModalClose();

      form.reset();
    }
  };

  async function onEditingContact(contactId, contact) {
    setIsRefreshing(true);
    try {
      const response = await editContact(contactId, contact);

      if (response.status === 200) {
        const newContactsList = contactsList.map(item => {
          if (item.id === contactId) {
            return response.data;
          }
          return item;
        });

        setContactsList(newContactsList);
        toast.success('You have edited the contact successfully', {
          toastId: 'editContactSuccess',
        });
      }
    } catch (e) {
      console.log(e);
      toast.error('Something went wrong. Try again, please!', {
        toastId: 'editContactError',
      });
    } finally {
      setIsRefreshing(false);
    }
  }

  const handleModalClose = () => {
    setOpen(false);
    setHelperTextName('');
    setErrorStateName(false);
    setHelperTextTel('');
    setErrorStateTel(false);
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleModalClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box
          sx={style.box}
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={onSubmitModalForm}
        >
          <Title id="modal-modal-description" sx={style.typography}>
            Edit the contact
          </Title>

          <NameInputTextField
            contactName={contactName}
            errorStateName={errorStateName}
            helperTextName={helperTextName}
          />
          <TelInputPatternFormat
            contactNumber={contactNumber}
            errorStateTel={errorStateTel}
            helperTextTel={helperTextTel}
          />
          <Button variant="contained" type="submit" sx={style.button}>
            Edit
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
}
