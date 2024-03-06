import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Drawer, Box, List, ListItem, Typography, styled } from '@mui/material';

import logo from '../../images/logo.png';
import { ToggleTheme } from './ToggleTheme';
import { useIsLoggedIn } from '../IsLoggedInContext';
import { LogOutBtn } from './LogOutBtn';

const style = {
  box: {
    width: 250,
    height: '100%',
    pt: 3,
    pl: 3,
    pr: 3,
    pb: 5,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    // background: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)',
  },
  list: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  listItem: {
    mb: 3,
  },
  typography: {
    fontSize: '22px',
    fontWeight: 600,
  },
  drawer: { borderTopRightRadius: '20px' },
};

const MuiBox = styled(Box)(({ theme }) => ({
  background: theme.palette.menuBackground,
}));

const Link = styled(NavLink)(({ theme }) => ({
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

export default function Menu({
  toggleDrawer,
  logOutUser,
  state,
  setState,
  handleThemeToggle,
  darkMode,
}) {
  const { isLoggedIn } = useIsLoggedIn();

  const onLogOutBtnClick = (anchor, open) => {
    setState({ ...state, [anchor]: open });
    logOutUser();
  };

  const list = anchor => (
    <MuiBox
      sx={style.box}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <NavLink to="/" onClick={toggleDrawer(anchor, false)}>
        <img src={logo} alt="logo" width={50} />
      </NavLink>
      <List sx={style.list}>
        <ListItem
          disablePadding
          sx={style.listItem}
          onClick={toggleDrawer(anchor, false)}
        >
          <Link to="/">
            <Typography sx={style.typography}>Home</Typography>
          </Link>
        </ListItem>
        {isLoggedIn && (
          <ListItem disablePadding onClick={toggleDrawer(anchor, false)}>
            <Link to="/contacts">
              <Typography sx={style.typography}>Contacts</Typography>
            </Link>
          </ListItem>
        )}
        {!isLoggedIn && (
          <ListItem
            disablePadding
            sx={style.listItem}
            onClick={toggleDrawer(anchor, false)}
          >
            <Link
              to="/register"
              className={({ isActive }) => (isActive ? 'active link' : 'link')}
            >
              <Typography sx={style.typography}>Sign up</Typography>
            </Link>
          </ListItem>
        )}
        {!isLoggedIn && (
          <ListItem disablePadding onClick={toggleDrawer(anchor, false)}>
            <Link
              to="/signin"
              className={({ isActive }) => (isActive ? 'active link' : 'link')}
            >
              <Typography sx={style.typography}>Sign in</Typography>
            </Link>
          </ListItem>
        )}
      </List>
      {isLoggedIn && (
        <LogOutBtn
          id="menuBtn"
          onLogOutBtnClick={() => onLogOutBtnClick(anchor, false)}
        />
      )}
      <ToggleTheme handleThemeToggle={handleThemeToggle} darkMode={darkMode} />
    </MuiBox>
  );

  return (
    <div>
      <Fragment key={'left'}>
        <Drawer
          anchor={'left'}
          open={state['left']}
          onClose={toggleDrawer('left', false)}
          sx={style.drawer}
        >
          {list('left')}
        </Drawer>
      </Fragment>
    </div>
  );
}
