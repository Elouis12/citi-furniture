import React, { useState } from 'react';

function Partners() {
    const [showHfHContent, setShowHfHContent] = useState(false);
    const [showCityFurnitureContent, setShowCityFurnitureContent] = useState(false);

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2C3A47',
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

    const cardContainerStyle = {
        display: 'flex',
        margin: '1rem 0',
        maxWidth: '1000px',
        marginLeft: '60px',
    };

    const logoStyle = {
        width: '230px',
        height: '230px',
        cursor: 'pointer',
        transition: 'all 0.3s',
        padding: '10px',
        backgroundColor: 'white'
    };

    const contentStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        color: 'black',
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        transition: 'all 0.3s',
        width: '0px',
        visibility: 'hidden',
        height: '280px',
        overflowY: 'scroll',
        marginRight: '20px'
    };

    const cardsContainerStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        padding: '0 1%'
    };

    return (
        <>
            

            <div style={containerStyle}>
                <header style={headerStyle}>
                    <h1 style={{ fontSize: '2.5rem' }}>Our Partners</h1>
                    <div style={headerLineStyle}></div>
                </header>

                <div style={cardsContainerStyle}>
                    {/* Habitat for Humanity Card */}
                    <div style={cardContainerStyle}>
                        <img src="/HfH_logo.png" alt="Habitat for Humanity Logo" style={logoStyle} onClick={() => setShowHfHContent(!showHfHContent)} />
                        <div style={{ ...contentStyle, width: showHfHContent ? '300px' : '0', visibility: showHfHContent ? 'visible' : 'hidden' }}>
                            <h2>Habitat for Humanity:</h2>
                            <p>
                                Habitat for Humanity is a global nonprofit housing organization working in local communities 
                                across all 50 states in the U.S. and in approximately 70 countries. They work towards a vision 
                                where everyone has a decent place to live.
                            </p>
                        </div>
                    </div>

                    {/* City Furniture Card */}
                    <div style={cardContainerStyle}>
                        <img src="/City_Furniture_Logo.jpg" alt="City Furniture Logo" style={logoStyle} onClick={() => setShowCityFurnitureContent(!showCityFurnitureContent)} />
                        <div style={{ ...contentStyle, width: showCityFurnitureContent ? '330px' : '0', visibility: showCityFurnitureContent ? 'visible' : 'hidden' }}>
                            <h2>City Furniture:</h2>
                            <p>
                                City Furniture is one of the leading furniture retailers, providing high-quality furniture 
                                and home accessories for over 40 years. We are proud to partner with City Furniture to 
                                bring a blend of style, comfort, and functionality to our design projects. Their commitment 
                                to sustainability and community aligns with our values, making our collaboration fruitful 
                                for both our clients and the environment.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            
        </>
    );
}

export default Partners;
