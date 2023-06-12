import React from 'react';

const NotFound = () => {
  return (
    <div
      style={{
        background: 'linear-gradient(to bottom right, #FF9BCA, #FFD3A5, #FFEAC8)',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
      }}
    >
      <h1
        style={{
          color: '#fff',
          fontSize: '24px',
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        404 - Page Not Found
      </h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
