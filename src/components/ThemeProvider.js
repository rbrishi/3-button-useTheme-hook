import React from 'react';
import useTheme from '../hooks/useTheme';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const theme = useTheme();

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
