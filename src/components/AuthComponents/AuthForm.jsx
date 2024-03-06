import React, { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  List,
  ListItem,
  TextField,
  Button,
  IconButton,
  Typography,
  styled,
} from '@mui/material';

const MuiBox = styled(Box)(({ theme }) => ({
  background: theme.palette.common,
  border: `3px solid ${theme.palette.primary.light}`,
}));

const MuiTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.dark,
}));

const MuiVisibility = styled(Visibility)(({ theme }) => ({
  fill: theme.palette.primary.main,
  transition: 'all 300ms ease-in-out',
  '&:hover': {
    fill: theme.palette.secondary.main,
    scale: '1.05',
  },
}));

const MuiVisibilityOff = styled(VisibilityOff)(({ theme }) => ({
  fill: theme.palette.primary.main,
  transition: 'all 300ms ease-in-out',
  '&:hover': {
    fill: theme.palette.secondary.main,
    scale: '1.05',
  },
}));

export const LoginButton = styled(Button)(({ theme }) => ({
  padding: '10px 45px',
  transition: 'all 300ms ease-in-out',
  '&:hover': {
    scale: '1.01',
  },
}));

const style = {
  box: {
    position: 'relative',
    ml: 'auto',
    mr: 'auto',
    width: { sm: '299px', md: '450px' },
    maxWidth: { xs: '100%', sm: '299px', md: '450px' },
    p: '30px 15px',
    borderRadius: '30px',
    textAlign: 'center',
  },
  title: {
    fontSize: { xs: '22px', md: '26px' },
    fontWeight: 600,
  },
  list: {
    marginTop: '30px',
    marginBottom: '60px',
  },
  listItem: {
    borderRadius: '4px',
    position: 'relative',
    '&:not(:last-child)': { marginBottom: '40px' },
  },
  iconBtn: {
    position: 'absolute',
    right: '24px',
    p: 0,
    '&:hover': {
      background: 'transparent',
    },
  },
  visibility: {
    width: { xs: '18px', md: '22px' },
    transition: 'color 300ms ease-in-out',
  },
};

const MuiTextField = styled(TextField)(({ theme }) => ({
  background: theme.palette.inputBackground,
}));

const AuthForm = ({ title, onSubmit, fields, src, className }) => {
  const [passwordType, setPasswordType] = useState('password');

  const togglePassword = () => {
    setPasswordType(prevType =>
      prevType === 'password' ? 'text' : 'password'
    );
  };

  const handleSubmit = async e => {
    e.preventDefault();

    await onSubmit(e);
  };

  return (
    <MuiBox
      component="form"
      sx={style.box}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <MuiTitle sx={style.title}>{title}</MuiTitle>
      <List sx={style.list}>
        {fields.map(field => (
          <ListItem key={field.name} sx={style.listItem}>
            <MuiTextField
              error={field.errorState}
              variant="outlined"
              label={field.label}
              type={field.name === 'password' ? passwordType : field.name}
              name={field.name}
              helperText={field.helperText}
            />
            {field.name === 'password' && (
              <IconButton
                aria-label="toggle password"
                type="button"
                onClick={togglePassword}
                sx={style.iconBtn}
              >
                {passwordType === 'password' ? (
                  <MuiVisibility sx={style.visibility} />
                ) : (
                  <MuiVisibilityOff sx={style.visibility} />
                )}
              </IconButton>
            )}
          </ListItem>
        ))}
      </List>
      <LoginButton variant="contained" type="submit">
        {title}
      </LoginButton>
      <img src={src} alt="pen" className={className} />
    </MuiBox>
  );
};

export default AuthForm;
