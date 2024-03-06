import { useEffect, useState } from 'react';
import { Avatar, Grid, IconButton, Paper, styled } from '@mui/material';
import { stringContactAvatar } from 'utils/createAvatar';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { motion } from 'framer-motion';

import ContactModal from './ContactModal/ContactModal';
import { createListItemMotion } from 'utils/createListItemMotion';

const style = {
  grid: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: '4px',
    transition: 'scale(1.2) 0.3s ease-in-out',
    mb: 0.2,
  },
  gridItem: {
    marginLeft: { xs: -0.2, md: -0.5 },
    display: 'block',
  },
  contactNameItem: {
    justifyContent: 'start',
    pl: { xs: 2, md: 0 },
    p: { xs: 1, md: 2 },
  },
  contactNumberItem: {
    fontSize: { md: '16px', lg: '18px' },
    pl: 2,
    height: '100%',
  },
  buttonItem: {
    display: 'flex',
    justifyContent: 'center',
    p: 0,
    height: '100%',
    background: 'transparent',
  },
  iconButton: {
    minHeight: 0,
    minWidth: 0,
    display: 'block',
    transition: 'all 300ms ease-in-out',
    '&:hover': {
      background: 'transparent',
      transform: 'scale(1.1)',
    },
  },
  icon: { fontSize: { xs: '22px', lg: '25px' } },
};

const MuiGrid = styled(Grid)(({ theme }) => ({
  '&:nth-of-type(even)': {
    background: theme.palette.secondary.light,
  },
  '&:nth-of-type(odd)': {
    background: theme.palette.secondary.dark,
  },
  color: theme.palette.primary.light,
}));

const Item = styled(Paper)(({ theme }) => ({
  color: theme.palette.text.secondary,
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
  background: 'transparent',
}));

const MuiEditIcon = styled(EditIcon)(({ theme }) => ({
  '&:hover': {
    fill: theme.palette.secondary.main,
  },
}));

const MuiDeleteIcon = styled(DeleteIcon)(({ theme }) => ({
  '&:hover': {
    fill: theme.grey[500],
  },
}));

export const ContactItem = ({
  contactsList,
  contactName,
  contactNumber,
  contactId,
  onDeleteIconClick,
  setContactsList,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth]);

  return (
    <MuiGrid
      component={motion.div}
      initial="initial"
      animate="animate"
      exit="exit"
      transition="transition"
      variants={createListItemMotion}
      key={contactId}
      container
      columnSpacing={0.2}
      sx={style.grid}
    >
      <Grid item xs={8} md={5.5} lg={5} sx={style.gridItem}>
        <Item sx={style.contactNameItem}>
          <Avatar {...stringContactAvatar(contactName)} />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              fontSize:
                windowWidth < 768
                  ? '14px'
                  : windowWidth >= 768 && windowWidth < 1440
                  ? '16px'
                  : '20px',
            }}
          >
            <span style={{ fontWeight: 600 }}>{contactName}</span>
            {windowWidth < 768 && (
              <span style={{ fontStyle: 'italic' }}>{contactNumber}</span>
            )}
          </div>
        </Item>
      </Grid>
      {windowWidth >= 768 && (
        <Grid item xs={4} md={4.5} lg={4}>
          <Item sx={style.contactNumberItem}>☎️ {contactNumber}</Item>
        </Grid>
      )}
      <Grid item xs={2} md={1} lg={1.5}>
        <Item sx={style.buttonItem}>
          <IconButton
            onClick={() => setOpen(true)}
            aria-label="edit"
            color="primary"
            sx={style.iconButton}
          >
            <MuiEditIcon sx={style.icon} />
          </IconButton>
        </Item>
      </Grid>

      <Grid item xs={2} md={1} lg={1.5}>
        <Item sx={style.buttonItem}>
          <IconButton
            onClick={() => onDeleteIconClick(contactId)}
            aria-label="delete"
            sx={style.iconButton}
          >
            <MuiDeleteIcon sx={style.icon} />
          </IconButton>
        </Item>
      </Grid>
      <ContactModal
        open={open}
        setOpen={setOpen}
        contactId={contactId}
        contactName={contactName}
        contactNumber={contactNumber}
        contactsList={contactsList}
        setContactsList={setContactsList}
      />
    </MuiGrid>
  );
};
