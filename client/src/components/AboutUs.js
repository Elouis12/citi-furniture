import React from 'react';

function AboutUs() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#2C3A47', // Dark background color
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
      <header style={headerStyle}>
        <h1 style={{fontSize: '2.5rem'}}>About Us</h1>
        <div style={headerLineStyle}></div>
      </header>
      
      <section style={contentStyle}>
        {/* ... (content paragraph remains unchanged) */}
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
