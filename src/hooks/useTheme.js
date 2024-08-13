import { useState } from 'react';

const useTheme = () => {
  const [backgroundColor, setBackgroundColor] = useState('blue');

  const changeColor = (color) => {
    setBackgroundColor(color);
  };

  return {
    backgroundColor,
    changeColor,
  };
};

export default useTheme;
