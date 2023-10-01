import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ImageUpload from './components/Chat/ImageUpload.js';
import ChatInterface from './components/Chat/ChatInterface.js';
import Homepage from './components/HomePage/Homepage.js'; // Import the homepage component
import AboutUs from './components/AboutUs';  // Import the AboutUs component
import Partners from './components/Partners';
// import Form from "./components/Furniture/Form";  // Import the Partners component
import Furniture from "./components/Furniture/Furniture";  // Import the Partners component
import TitleBar from './components/TitleBar.js';  // Import the TitleBar component
import Footer from './components/Footer.js';

function App() {
  const [roomImage, setRoomImage] = useState(null);

  return (
    <Router>
      <div className="App">
        <TitleBar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/chat" element={
            /*<ChatInterface roomImage={roomImage}>
              <ImageUpload onImageUpload={setRoomImage} />
            </ChatInterface>*/
            <Furniture/>
          } />
          <Route path="/about" element={<AboutUs />} />  {/* Add a route for the AboutUs page */}
          <Route path="/partners" element={<Partners />} />  {/* Add a route for the Partners page */}
        </Routes>
        <Footer />
      </div>
    </Router>
        // <Form/>
      // <Furniture/>
  );
}

export default App;
