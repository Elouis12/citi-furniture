import React from 'react';
import TitleBar from './TitleBar';
import Footer from './Footer';

function AboutUs() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#2C3A47',  // Dark background color
    color: 'white',
    padding: '3rem 0',
    fontFamily: 'Roboto, sans-serif'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '2rem'
  };

  const headerLineStyle = {
    backgroundColor: '#3498db',  // Blue color for the line
    height: '4px',
    width: '80px',
    margin: '0.5rem auto'
  };

  const contentStyle = {
    maxWidth: '600px',
    padding: '0 2rem',
    textAlign: 'center'
  };

  return (
    <>
      <TitleBar />

      <div style={containerStyle}>
        <header style={headerStyle}>
          <h1 style={{fontSize: '2.5rem'}}>About Us</h1>
          <div style={headerLineStyle}></div>
        </header>
        
        <section style={contentStyle}>
          <p>
            DecorAItor is a leading platform for interior design, offering innovative solutions 
            to design your living space. Our AI-powered tools and expert designers work hand-in-hand 
            to transform any space into a beautiful, functional, and personalized environment.
          </p>
          <p>
            Founded in 2023, we have worked with thousands of clients worldwide and continue to 
            pioneer in the interior design industry. Our mission is to make professional design 
            accessible to everyone, everywhere.
          </p>
        </section>
      </div>

      
    </>
  );
}

export default AboutUs;
