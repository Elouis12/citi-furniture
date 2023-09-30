import React from 'react';

function Footer() {
    return (
        <div style={{ 
            backgroundColor: 'black', 
            height: '60px', 
            width: '100vw', 
            color: 'white', 
            fontSize: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '10px',  // Added top padding for balance
            paddingBottom: '20px'  // Increased bottom padding
        }}>
            © 2023 by DecorAItor. Partnered with Habitat for Humanity.
        </div>
    );
}


export default Footer;
