import React from 'react';
import Spline from '@splinetool/react-spline';

function AboutUs() {
  const containerStyle = {
    position: 'relative',  // Make container position relative
    minHeight: '100vh',  // Ensure container covers the full viewport height
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // backgroundColor: '#2C3A47', // Remove this line
    color: 'white',
    padding: '3rem 0',
    fontFamily: 'Roboto, sans-serif'
};




  const headerStyle = {
    textAlign: 'center',
    marginBottom: '2rem'
  };

  const headerLineStyle = {
    backgroundColor: '#3498db', // Blue color for the line
    height: '4px',
    width: '80px',
    margin: '0.5rem auto'
  };

  const contentStyle = {
    maxWidth: '600px',
    padding: '0 2rem',
    textAlign: 'center'
  };

  const cardStyle = {
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s',
  };

  return (
    <div style={containerStyle}>
      {/* Spline Background */}
      <Spline 
          scene="https://prod.spline.design/sOoV8XZEuyPiIPR3/scene.splinecode"
          style={{
              position: 'absolute',  // Absolute position
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: -1  // Ensure it's rendered below your content
          }}
      />

      <header style={headerStyle}>
        <h1 style={{fontSize: '2.5rem'}}>About Us</h1>
        <div style={headerLineStyle}></div>
      </header>
      
      <section style={contentStyle}>
        {/* ... (content paragraph remains unchanged) */}
      </section>

      {/* Values Grid */}
      <h3 style={{ 
                     color: 'white', 
                    marginBottom: '100px', 
                    fontSize: '48px',  // Increase font size
                    fontWeight: 'bold',  // Make font bold
                    letterSpacing: '1px',  // Slight letter spacing
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',  // Text shadow for a 3D effect
                    textAlign: 'center',  // Center align the text
                        }}>Our Core Values</h3>

      <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          padding: '40px 10%',
      }}>
          {["Accessibility", "Inclusivity", "Community Support"].map((title, index) => {
              const descriptions = [
                  "We strive to make our platform accessible to everyone, ensuring that all users can benefit from our services.",
                  "Our community is diverse, and we are committed to fostering an environment where everyone feels included.",
                  "We believe in giving back. Our initiatives aim to uplift and support the broader community."
              ];
              return (
                  <div 
                      style={cardStyle}
                      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                      key={index}
                  >
                      <h2>{title}</h2>
                      <p>{descriptions[index]}</p>
                  </div>
              )
          })}
      </div>
    </div>
  );
}

export default AboutUs;
