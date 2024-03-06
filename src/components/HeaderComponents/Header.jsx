import { useEffect } from 'react';
import { useState } from 'react';
import { AppBar, Box, Toolbar } from '@mui/material';
import { toast } from 'react-toastify';

import Menu from 'components/HeaderComponents/Menu';
import { useIsLoggedIn } from '../IsLoggedInContext';
import { UserMenu } from './UserMenu';
import { Navigation } from './Navigation';
import { MenuBtn } from './MenuBtn';
import { ToggleTheme } from './ToggleTheme';
import { handleLogOut } from 'APIServices.js/APIServices';
import { AuthNav } from './AuthNav';

export default function Header({ handleThemeToggle, darkMode }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [state, setState] = useState({
    left: false,
  });
  const { isLoggedIn, setIsLoggedIn, setIsRefreshing, setName } =
    useIsLoggedIn();

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
      if (windowWidth < 768) {
        setState({ ...state, left: false });
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth, state]);

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const logOutUser = async () => {
    setIsRefreshing(true);
    try {
      const response = await handleLogOut();
      if (response.status === 200) {
        setIsRefreshing(false);
        setIsLoggedIn(false);
        setName('');
        localStorage.removeItem('token');
        toast.success('You have logged out successfully', {
          toastId: 'logoutUserSuccess',
        });
      }
    } catch (e) {
      console.log(e);

      toast.error(`Something has gone wrong. ${e.message}`, {
        toastId: 'logoutUserError',
      });
    } finally {
      setIsRefreshing(false);
    }
  };

  return (
    <div>
      <Box>
        <AppBar position="sticky">
          <Toolbar disableGutters>
            <Navigation windowWidth={windowWidth} />
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              {windowWidth >= 768 && (
                <ToggleTheme
                  handleThemeToggle={handleThemeToggle}
                  darkMode={darkMode}
                />
              )}
              {isLoggedIn ? (
                <UserMenu onLogOutBtnClick={logOutUser} />
              ) : (
                <AuthNav />
              )}
              <MenuBtn toggleDrawer={toggleDrawer} />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Menu
        toggleDrawer={toggleDrawer}
        setState={setState}
        state={state}
        logOutUser={logOutUser}
        handleThemeToggle={handleThemeToggle}
        darkMode={darkMode}
      />
    </div>
  );
}
