import { NavLink } from 'react-router-dom';
import { Card, Typography, styled } from '@mui/material';

import { useIsLoggedIn } from '../IsLoggedInContext';
import logo from '../../images/logo.png';

const Link = styled(NavLink)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
  textDecoration: 'none',
  color: theme.palette.primary.main,
  '&:hover': {
    color: theme.palette.secondary.main,
  },
  '&.active': {
    color: theme.palette.info.main,
  },
  '&.active:hover': {
    color: theme.palette.info.dark,
  },
}));

const style = {
  card: { display: 'flex', alignItems: 'center', gap: '30px' },
  typographyHome: {
    display: { xs: 'none', md: 'inline-block' },
    fontSize: { xs: '16px', md: '20px' },
    fontWeight: 600,
  },
  typographyContacts: {
    fontSize: { xs: '16px', md: '20px' },
    fontWeight: 600,
  },
};

export const Navigation = ({ windowWidth }) => {
  const { isLoggedIn } = useIsLoggedIn();

  return (
    <Card sx={style.card}>
      <Link
        to="/"
        className={({ isActive }) => (isActive ? 'active link' : 'link')}
      >
        <img src={logo} alt="logo" className="logoImg" />

        <Typography sx={style.typographyHome}>Home</Typography>
      </Link>
      {isLoggedIn && windowWidth >= 768 && (
        <Link
          to="/contacts"
          className={({ isActive }) => (isActive ? 'active link' : 'link')}
        >
          <Typography sx={style.typographyContacts}>Contacts</Typography>
        </Link>
      )}
    </Card>
  );
};
