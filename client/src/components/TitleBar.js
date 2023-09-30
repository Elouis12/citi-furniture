// components/TitleBar.js

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
            justifyContent: 'center', 
            color: 'white', 
            fontSize: '24px' 
        }}>
            <Link to="/">
                <img src="/decorAItor_logo-removebg-preview.png" alt="Logo" style={{ 
                    position: 'absolute', 
                    top: '10px', 
                    left: '10px', 
                    height: '50px', 
                    zIndex: 1 
                }} />
            </Link>
            Title
        </div>
    );
}

export default TitleBar;
