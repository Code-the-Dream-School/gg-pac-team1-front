import React from 'react';

const BackgroundOverlay = ({ backgroundImage }) => {
  const containerStyle = {
    padding: '40px 20px',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: 'white',
    position: 'relative',
    zIndex: 1,
  };

  const overlayStyle = {
    content: "''",
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: -1,
    borderRadius: '10px',
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}></div>
    </div>
  );
};

export default BackgroundOverlay;
