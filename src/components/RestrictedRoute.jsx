import { Navigate } from 'react-router-dom';

import { useIsLoggedIn } from './IsLoggedInContext';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useIsLoggedIn();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
