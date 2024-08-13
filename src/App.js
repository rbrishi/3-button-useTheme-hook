import React, { useContext } from 'react';
import { ThemeProvider, ThemeContext } from './components/ThemeProvider';
import Button from './components/Buttons';

const App = () => {
  const { backgroundColor } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor,
        height: '100vh',
        transition: 'background-color 0.3s',
      }}
    >
      <Button color="red" label="Button 1" />
      <Button color="green" label="Button 2" />
      <Button color="yellow" label="Button 3" />
    </div>
  );
};

const Main = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default Main;
