import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './HeaderComponents/Header';
import { Container, styled } from '@mui/material';
import { Spinner } from './Spinner';

export const Layout = ({ handleThemeToggle, darkMode }) => {
  const MuiContainer = styled(Container)(({ theme }) => ({
    background: theme.palette.containerBackground,
  }));
  return (
    <MuiContainer disableGutters maxWidth={false}>
      <Header handleThemeToggle={handleThemeToggle} darkMode={darkMode} />
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </MuiContainer>
  );
};

export default Layout;
