import { Route, Routes, useLocation } from 'react-router-dom';
import { lazy, useEffect, useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { AnimatePresence } from 'framer-motion';

import { getUserInfo } from 'APIServices.js/APIServices';
import Layout from '../components/Layout';
import { lightTheme, darkTheme } from 'styles/styles';
import { useIsLoggedIn } from './IsLoggedInContext';
import { Spinner } from './Spinner';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const SignInPage = lazy(() => import('../pages/SignInPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

export const App = () => {
  const { setIsLoggedIn, isRefreshing, setIsRefreshing, setName } =
    useIsLoggedIn();
  const location = useLocation();

  const [darkMode, setDarkMode] = useState(false);

  const handleThemeToggle = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('theme', newDarkMode);
  };

  useEffect(() => {
    setIsRefreshing(true);
    const persistedTheme = localStorage.getItem('theme');
    if (persistedTheme) {
      setDarkMode(JSON.parse(persistedTheme));
    }
    const refreshUser = async () => {
      const persistedToken = localStorage.getItem('token');
      if (!persistedToken) {
        setIsRefreshing(false);
        return;
      }

      try {
        const response = await getUserInfo();

        if (response.status === 200) {
          setIsLoggedIn(true);

          setName(response.data.name);
        }
      } catch (e) {
        console.log(e);
      } finally {
        setIsRefreshing(false);
      }
    };
    refreshUser();
  }, [setIsLoggedIn, setIsRefreshing, setName, darkMode]);

  return isRefreshing ? (
    <Spinner />
  ) : (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <AnimatePresence ExitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route
            path="/"
            element={
              <Layout
                handleThemeToggle={handleThemeToggle}
                darkMode={darkMode}
              />
            }
          >
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="/signin"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<SignInPage />}
                />
              }
            />

            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/signin"
                  component={<ContactsPage />}
                />
              }
            />
          </Route>
        </Routes>
      </AnimatePresence>
    </ThemeProvider>
  );
};
