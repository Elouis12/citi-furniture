import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Homepage from './components/HomePage/Homepage.js'; // Import the homepage component
import AboutUs from './components/AboutUs';  // Import the AboutUs component
import Partners from './components/Partners';
import Furniture from "./components/Furniture/Furniture";  
import TitleBar from './components/TitleBar.js';  // Import the TitleBar component
import Footer from './components/Footer.js';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

function App() {
  const [roomImage, setRoomImage] = useState(null);

  const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',  // Ensure the container covers the full viewport height
  };

  const contentStyle = {
    flex: 1,  // This will make the content area stretch to take up all available space
    overflow: 'auto',  // Add scrolling if necessary
  };

  return (
    <I18nextProvider i18n={i18n}>  {/* Wrap your main App component with I18nextProvider */}
      <Router>
        <div className="App" style={appStyle}>
          <TitleBar />

          <div style={contentStyle}>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/design" element={
                
                <Furniture/>
              } />
              <Route path="/about" element={<AboutUs />} />  {/* Add a route for the AboutUs page */}
              <Route path="/partners" element={<Partners />} />  {/* Add a route for the Partners page */}
            </Routes>
          </div>

          <Footer />
        </div>
      </Router>
    </I18nextProvider>
  );
}

export default App;
