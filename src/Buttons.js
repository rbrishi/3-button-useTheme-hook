import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

const Button = ({ color, label }) => {
  const { changeColor } = useContext(ThemeContext);

  return <button onClick={() => changeColor(color)}>{label}</button>;
};

export default Button;
