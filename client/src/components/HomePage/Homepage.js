import React from 'react';
import { Link } from 'react-router-dom';
import TitleBar from '../TitleBar';

function Homepage() {
    return (
        <>
            <TitleBar />

            {/* Hero and Feature Section */}
            <div style={{
                backgroundColor: '#2C3A47', // Dark background
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                {/* Hero Section */}
                <div style={{
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
                            height: '150px', 
                            marginBottom: '30px',
                            borderRadius: '20px'
                        }} 
                    />
                    <h1 style={{ color: '#f5e1da', marginBottom: '30px' }}>Reimagine Your Space</h1>
                    <Link to="/chat">
                        <button style={{
                            backgroundColor: '#f5e1da',
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
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '40px',
                    padding: '60px 10%',
                }}>
                    {/* Sample Card */}
                    <FeatureCard title="AI Tools" description="Experience the power of AI in designing your perfect space."/>
                    <FeatureCard title="Expert Designers" description="Our team of expert designers ensures a unique touch to every project."/>
                    <FeatureCard title="Affordable Packages" description="High-quality designs that won't break the bank."/>
                    <FeatureCard title="Custom Solutions" description="Every space is unique. Get tailor-made solutions for your home."/>
                </div>
            </div>
        </>
    );
}

function FeatureCard({ title, description }) {
    return (
        <div style={{
            backgroundColor: '#f5e1da', // Cream background
            borderRadius: '20px',
            padding: '40px',
            boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.2s',
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

export default Homepage;
