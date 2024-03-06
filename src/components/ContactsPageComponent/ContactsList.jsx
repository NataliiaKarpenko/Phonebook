import { Grid } from '@mui/material';
import { AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';

import { ContactItem } from './ContactItem';
import { deleteContact } from 'APIServices.js/APIServices';

const style = {
  ml: 'auto',
  mr: 'auto',
  mb: '50px',
  width: { md: '600px', lg: '900px' },
  maxWidth: { xs: '600px', lg: '900px' },
  position: 'relative',
};

export const ContactsList = ({
  filteredContacts,
  contactsList,
  setContactsList,
}) => {
  const onDeleteIconClick = async contactId => {
    try {
      const response = await deleteContact(contactId);

      if (response.status === 200) {
        const newContactList = filteredContacts.filter(
          contact => contact.id !== contactId
        );

        setContactsList(newContactList);
        localStorage.removeItem('token');

        toast.success(
          `${response.data.name} has been successfully deleted from the contacts`,
          { toastId: 'onDeleteIconClickSuccess' }
        );
      }
    } catch (e) {
      console.log(e);
      toast.error('Something has gone wrong. Try again', {
        toastid: 'onDeleteIconClickError',
      });
    }
  };

  return (
    <Grid container spacing={1} sx={style}>
      <AnimatePresence>
        {filteredContacts?.map(contact => {
          return (
            <ContactItem
              key={contact.id}
              contactsList={contactsList}
              contactName={contact.name}
              contactNumber={contact.number}
              contactId={contact.id}
              onDeleteIconClick={onDeleteIconClick}
              setContactsList={setContactsList}
            />
          );
        })}
      </AnimatePresence>
    </Grid>
  );
};
