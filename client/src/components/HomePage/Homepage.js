import React from 'react';
import { Link } from 'react-router-dom';

import Spline from '@splinetool/react-spline';

function Homepage() {
    return (
        <>
           

            {/* Main Container */}
            <div style={{ position: 'relative', minHeight: '100vh' }}>  {/* Set minHeight to 100vh */}
                {/* Spline Background */}
                <Spline 
                    scene="https://prod.spline.design/sOoV8XZEuyPiIPR3/scene.splinecode"
                    style={{
                        position: 'absolute',  // Absolute position
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: -1  
                    }}
                />

                {/* Hero Section */}
                <div style={{
                    position: 'relative',  // Relative position to overlay the Spline background
                    height: '60vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <img 
                        src="/decorAItor_logo-removebg-preview.png" 
                        alt="Logo" 
                        style={{ 
                            height: '150px', 
                            marginBottom: '30px',
                            borderRadius: '20px'
                        }} 
                    />
                    <h3 style={{ 
                     color: 'white', 
                    marginBottom: '100px', 
                    fontSize: '48px',  
                    fontWeight: 'bold',  
                    letterSpacing: '1px',  
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',  
                    textAlign: 'center',  
                        }}>Reimagine Your Space</h3>

                    <Link to="/design">
                        <button style={{
                            backgroundColor: 'white',
                            color: 'black',
                            padding: '15px 35px',
                            border: 'none',
                            borderRadius: '30px',
                            cursor: 'pointer',
                            fontSize: '20px',
                            transition: 'transform 0.2s'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            Get Started
                        </button>
                    </Link>
                </div>

                {/* Feature Grid */}
                <div style={{
                    position: 'relative',  // Relative position to overlay the Spline background
                    padding: '60px 10%',
                }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '40px',
                    }}>
                        <FeatureCard title="AI Tools" description="Experience the power of AI in designing your perfect space." />
                        <FeatureCard title="Expert Designers" description="Our team of expert designers ensures a unique touch to every project." />
                        <FeatureCard title="Affordable Packages" description="High-quality designs that won't break the bank." />
                        <FeatureCard title="Custom Solutions" description="Every space is unique. Get tailor-made solutions for your home." />
                    </div>
                </div>
            </div>
        </>
    );
}

function FeatureCard({ title, description }) {
    return (
        <div style={{
            backgroundColor: 'white', 
            borderRadius: '20px',
            padding: '40px',
            boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.2s',
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
            <h2 style={{ color: 'black' }}>{title}</h2>
            <p style={{ color: 'black' }}>{description}</p>
        </div>
    );
}

export default Homepage;
