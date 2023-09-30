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
      
    {/* Values Grid */}
    <h2 style={{
        textAlign: 'center',
        marginBottom: '2rem',
        color: 'white'
    }}>Our core values:</h2>

    <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
        padding: '40px 10%',
        backgroundColor: '#2C3A47'  // Matching the dark background
    }}>
        {/* Accessibility Card */}
        <div style={{
            backgroundColor: 'white',
            color: 'black',
            borderRadius: '10px',
            padding: '20px',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.2s',
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
            <h2>Accessibility</h2>
            <p>We strive to make our platform accessible to everyone, ensuring that all users can benefit from our services.</p>
        </div>

        {/* Inclusivity Card */}
        <div style={{
            backgroundColor: 'white',
            color: 'black',
            borderRadius: '10px',
            padding: '20px',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.2s',
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
            <h2>Inclusivity</h2>
            <p>Our community is diverse, and we are committed to fostering an environment where everyone feels included.</p>
        </div>

        {/* Community Support Card */}
        <div style={{
            backgroundColor: 'white',
            color: 'black',
            borderRadius: '10px',
            padding: '20px',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.2s',
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
            <h2>Community Support</h2>
            <p>We believe in giving back. Our initiatives aim to uplift and support the broader community.</p>
        </div>
    </div>

      </div>
      
    </>
  );
}

export default AboutUs;
