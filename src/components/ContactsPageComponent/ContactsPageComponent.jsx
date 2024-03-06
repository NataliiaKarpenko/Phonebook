import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { nanoid } from 'nanoid';
import { Typography, styled } from '@mui/material';

import { getContacts } from 'APIServices.js/APIServices';
import { createListItemMotion } from 'utils/createListItemMotion';
import { AddContactForm } from './AddContactForm';
import { ContactsList } from './ContactsList';
import { Filter } from './Filter';

const style = {
  title: {
    fontSize: { xs: '32px', md: '36px' },
    fontWeight: 600,
    textAlign: 'center',
    marginBottom: 1,
  },
  subtitle: {
    fontSize: { xs: '24px', md: '28px' },
    fontWeight: 600,
    textAlign: 'center',
    marginBottom: 3,
  },
  text: {
    fontSize: { xs: '20px', md: '24px' },
    fontWeight: 500,
    textAlign: 'center',
    marginBottom: 1,
  },
};

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const SubTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.light,
}));

const Info = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.dark,
}));

export const ContactsPageComponent = () => {
  const [contactsList, setContactsList] = useState([]);
  const [filterValue, setFilterValue] = useState('');
  const [filteredContacts, setFilteredContacts] = useState([]);

  useEffect(() => {
    const showContacts = async () => {
      try {
        const { data } = await getContacts();
        setContactsList(data);
      } catch (e) {
        console.log(e);
      }
    };
    showContacts();
  }, []);

  useEffect(() => {
    const createFilteredList = () => {
      const newContactsList = contactsList
        .filter(contact => contact.name.toLowerCase().includes(filterValue))
        .sort((firstContact, secondContact) =>
          firstContact.name.localeCompare(secondContact.name)
        );

      setFilteredContacts(newContactsList);
    };
    createFilteredList();
  }, [contactsList, filterValue]);

  const handleFilter = e => {
    const filterInput = e.currentTarget;
    const value = filterInput.value.trim().toLowerCase();
    setFilterValue(value);
  };

  return (
    <div>
      <Title variant="h1" sx={style.title}>
        Phonebook
      </Title>
      <AddContactForm
        contactsList={contactsList}
        setContactsList={setContactsList}
      />
      <SubTitle key={nanoid()} variant="h2" sx={style.subtitle}>
        Contacts
      </SubTitle>
      {contactsList.length === 0 ? (
        <Info
          key={nanoid()}
          component={motion.p}
          initial="initial"
          animate="animate"
          exit="exit"
          transition="transition"
          variants={createListItemMotion}
          sx={style.text}
        >
          ⚠️You haven't added any contacts yet
        </Info>
      ) : (
        <div>
          <Filter handleFilter={handleFilter} />
          <ContactsList
            filteredContacts={filteredContacts}
            setContactsList={setContactsList}
            contactsList={contactsList}
          />
        </div>
      )}
    </div>
  );
};
