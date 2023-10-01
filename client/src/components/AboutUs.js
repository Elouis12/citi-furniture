import React from 'react';
import TitleBar from './TitleBar';

/*
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
    <>
      <TitleBar />

      <div style={containerStyle}>
        <header style={headerStyle}>
          <h1 style={{fontSize: '2.5rem'}}>About Us</h1>
          <div style={headerLineStyle}></div>
        </header>
        
        <section style={contentStyle}>
          <p>
            DecorAItor is a leading platform for interior design, offering innovative solutions 
            to design your living space. Our AI-powered tools and expert designers work hand-in-hand 
            to transform any space into a beautiful, functional, and personalized environment.
          </p>
          <p>
            Founded in 2023, we have worked with thousands of clients worldwide and continue to 
            pioneer in the interior design industry. Our mission is to make professional design 
            accessible to everyone, everywhere.
          </p>
        </section>

        {/!* Values Grid *!/}
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

      
    {/!* Values Grid *!/}
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
        backgroundColor: '#2C3A47'  // Matching the dark background
    }}>
        {/!* Accessibility Card *!/}
        <div style={{
            backgroundColor: 'white',
            color: 'black',
            borderRadius: '10px',
            padding: '20px',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.2s',
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
            <h2>Accessibility</h2>
            <p>We strive to make our platform accessible to everyone, ensuring that all users can benefit from our services.</p>
        </div>

        {/!* Inclusivity Card *!/}
        <div style={{
            backgroundColor: 'white',
            color: 'black',
            borderRadius: '10px',
            padding: '20px',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.2s',
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
            <h2>Inclusivity</h2>
            <p>Our community is diverse, and we are committed to fostering an environment where everyone feels included.</p>
        </div>

        {/!* Community Support Card *!/}
        <div style={{
            backgroundColor: 'white',
            color: 'black',
            borderRadius: '10px',
            padding: '20px',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.2s',
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
            <h2>Community Support</h2>
            <p>We believe in giving back. Our initiatives aim to uplift and support the broader community.</p>
        </div>
    </div>
      
    </>
  );
}
*/


function AboutUs(){

    return (

        <div className={"w-full m-auto"}>

            <div className={"flex flex-col justify-center items-center space-y-10 w-1/2 m-auto"}>
                <h1 className={"text-3xl font-semibold"}>ABout US</h1>

                <p className={"text-center"}>
                    Decor<span className={"text-[#1877F2]"}>AI</span>tor is a leading platform for interior design, offering innovative solutions to design your living space. Our AI-powered tools and expert designers work hand-in-hand to transform any space into a beautiful, functional, and personalized environment.
                </p>

                <p className={"text-center"}>
                    Founded in 2023, we have worked with thousands of clients worldwide and continue to pioneer in the interior design industry. Our mission is to make professional design accessible to everyone, everywhere.
                </p>
            </div>

            <div className={"flex flex-col space-y-3 w-[90%] m-auto"}>
                <p className={"text-3xl font-semibold"}>Our Values:</p>
                <div className={"flex justify-center items-stretch w-full space-x-4"}>

                    <div
                        className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
                        </svg>
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Accessibility</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                            We strive to make our platform accessible to everyone, ensuring that all users can benefit from our services.
                        </p>

                    </div>

                    <div
                        className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
                        </svg>
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Inclusivity</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                            Our community is diverse, and we are committed to fostering an environment where everyone feels included.
                        </p>

                    </div>

                </div>
            </div>

        </div>
    )

}


export default AboutUs;
