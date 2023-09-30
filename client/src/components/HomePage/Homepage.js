import React from 'react';
import { Link } from 'react-router-dom';
import TitleBar from '../TitleBar';
import Footer from '../Footer';


function Homepage() {
    return (
        <>
            <TitleBar />

            {/* Content */}
            <div style={{ 
                maxWidth: '600px', 
                margin: 'auto', 
                fontFamily: 'Roboto, sans-serif', 
                display: 'flex', 
                flexDirection: 'column', 
                height: 'calc(100vh - 120px)',  // adjusted for title bar and footer
                alignItems: 'center', 
                justifyContent: 'center'
            }}>
                <img src="/decorAItor_logo-removebg-preview.png" alt="Logo" style={{ 
                    position: 'absolute', 
                    top: '10px', 
                    left: '10px', 
                    height: '50px', 
                    zIndex: 1 
                }} />

                <Link to="/chat">
                    <button style={{ 
                        backgroundColor: 'black', 
                        color: 'white', 
                        padding: '10px 20px', 
                        border: 'none', 
                        borderRadius: '5px', 
                        cursor: 'pointer', 
                        fontSize: '18px'
                    }}>
                        Go to Chat
                    </button>
                </Link>
            </div>

            <Footer />
        </>
    );
}

export default Homepage;
