import React from 'react';
import Spline from '@splinetool/react-spline';

function AboutUs() {
    const containerStyle = {
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white',
        padding: '3rem 0',
        fontFamily: 'Roboto, sans-serif'
    };

    const headerStyle = {
        textAlign: 'center',
        marginBottom: '2rem'
    };

    const headerLineStyle = {
        backgroundColor: '#3498db',
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

    const values = [
        {
            title: "Accessibility",
            description: "We strive to make our platform accessible to everyone, ensuring that all users can benefit from our services."
        },
        {
            title: "Inclusivity",
            description: "Our community is diverse, and we are committed to fostering an environment where everyone feels included."
        },
        {
            title: "Community Support",
            description: "We believe in giving back. Our initiatives aim to uplift and support the broader community."
        }
    ];

    return (
        <div style={containerStyle}>
            <Spline 
                scene="https://prod.spline.design/sOoV8XZEuyPiIPR3/scene.splinecode"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: -1
                }}
            />

            
            
           

          
                <section style={contentStyle}>
                <h3 style={{ 
                color: 'white', 
                marginBottom: '100px', 
                fontSize: '48px',
                fontWeight: 'bold',
                letterSpacing: '1px',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                textAlign: 'center',
            }}>Our Core Values</h3>

            <p style={{
                fontSize: '1.1rem',
                marginBottom: '1.5rem',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)'
            }}>
                At DecorAItor, we believe in harnessing the power of artificial intelligence to revolutionize interior design. Whether you're redesigning your living space, setting up a new office, or just looking for a fresh touch to your bedroom, our AI-powered platform is here to help.
            </p>
            <p style={{
                fontSize: '1.1rem',
                marginBottom: '1.5rem',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)'
            }}>
                Simply prompt our system with your design ideas, preferences, or constraints, and in an instant, you'll be presented with innovative and stylish design concepts tailored to your needs. Gone are the days of spending hours scrolling through catalogs or visiting multiple stores. With DecorAItor, finding the perfect design solution is just a click away.
            </p>
            <p style={{
                fontSize: '1.1rem',
                marginBottom: '1.5rem',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)'
            }}>
                Embrace the future of interior design. Let DecorAItor be your virtual design assistant, making your design dreams a reality.
            </p>
        </section>



            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '20px',
                padding: '40px 10%',
            }}>
                {values.map((value, index) => (
                    <div 
                        key={index}
                        style={cardStyle}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <h2>{value.title}</h2>
                        <p>{value.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AboutUs;
