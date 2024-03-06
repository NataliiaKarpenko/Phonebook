import { createContext } from 'react';
import { useContext, useState } from 'react';

const IsLoggedInContext = createContext();

export const IsLoggedInProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [name, setName] = useState('');

  return (
    <IsLoggedInContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        isRefreshing,
        setIsRefreshing,
        name,
        setName,
        darkTheme,
        setDarkTheme,
      }}
    >
      {children}
    </IsLoggedInContext.Provider>
  );
};

export const useIsLoggedIn = () => {
  return useContext(IsLoggedInContext);
};
