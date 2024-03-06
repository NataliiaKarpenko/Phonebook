const { Card, Typography, styled } = require('@mui/material');
const { NavLink } = require('react-router-dom');

const Link = styled(NavLink)(({ theme }) => ({
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
  card: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  typography: {
    display: { xs: 'none', md: 'inline-block' },
    fontSize: { xs: '16px', md: '20px' },
    fontWeight: 600,
  },
};

export const AuthNav = () => {
  return (
    <Card sx={style.card}>
      <Link
        to="/register"
        className={({ isActive }) => (isActive ? 'active link' : 'link')}
      >
        <Typography sx={style.typography}>Sign up</Typography>
      </Link>
      <Link
        to="/signin"
        className={({ isActive }) => (isActive ? 'active link' : 'link')}
      >
        <Typography sx={style.typography}>Sign in</Typography>
      </Link>
    </Card>
  );
};
