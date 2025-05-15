import React from 'react';
import { PacmanLoader } from 'react-spinners';

const Loader = ({ color = "#faff00", fullscreen = true }) => {
  const style = {
    height: fullscreen ? '100vh' : '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: fullscreen ? '#000' : 'transparent',
  };

  return (
    <div style={style}>
      <PacmanLoader color={color} />
    </div>
  );
};

export default Loader;
