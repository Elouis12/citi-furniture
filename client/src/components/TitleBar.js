import React from 'react';
import { Link } from 'react-router-dom';

function TitleBar() {
  return (
    <div style={{ 
      backgroundColor: 'black', 
      height: '60px', 
      width: '100vw', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between', 
      color: 'white', 
      fontSize: '24px' 
    }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', marginLeft: '10px', textDecoration: 'none', color: 'white' }}>
        <img src="/decorAItor_logo-removebg-preview.png" alt="Logo" style={{ height: '50px', marginRight: '10px' }} />
        DecorAitor
      </Link>

      <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'white', marginRight: '20px' }}>
          Home
        </Link>
        <Link to="/about" style={{ textDecoration: 'none', color: 'white', marginRight: '20px' }}>
          AboutUs
        </Link>
      </div>
      
      {/* This is an empty placeholder to maintain space-between justification */}
      <div style={{ marginRight: '10px' }}></div>
    </div>
  );
}

export default TitleBar;
