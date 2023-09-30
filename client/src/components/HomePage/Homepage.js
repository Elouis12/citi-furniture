import React from 'react';
import { Link } from 'react-router-dom';
import TitleBar from '../TitleBar';

function Homepage() {
    return (
        <>
            <TitleBar />

            {/* Hero Section */}
            <div style={{
                backgroundColor: '#2C3A47', // Dark background
                height: '60vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
            }}>
                <img 
                    src="/decorAItor_logo.png" 
                    alt="Logo" 
                    style={{ 
                        height: '120px', 
                        marginBottom: '20px',
                        borderRadius: '15px'
                    }} 
                />
                <h1 style={{ color: '#f5e1da', marginBottom: '20px' }}>Reimagine Your Space</h1>
                <Link to="/chat">
                    <button style={{
                        backgroundColor: '#f5e1da',
                        color: 'black',
                        padding: '15px 30px',
                        border: 'none',
                        borderRadius: '30px',
                        cursor: 'pointer',
                        fontSize: '18px',
                        transition: 'transform 0.2s'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        Start Chatting
                    </button>
                </Link>
            </div>

            {/* Feature Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '20px',
                padding: '40px 10%',
                backgroundColor: 'black'
            }}>
                {/* Sample Card */}
                <div style={{
                    backgroundColor: '#f5e1da', // Cream background
                    borderRadius: '10px',
                    padding: '20px',
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.2s',
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                    <h2>Feature 1</h2>
                    <p>Some brief info about the feature.</p>
                </div>
                {/* You can add more cards like the above for more features */}
            </div>
        </>
    );
}

export default Homepage;
