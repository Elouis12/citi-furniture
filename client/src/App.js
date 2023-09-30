import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ImageUpload from './components/Chat/ImageUpload.js';
import ChatInterface from './components/Chat/ChatInterface.js';
import Homepage from './components/HomePage/Homepage.js'; // Import the homepage component

function App() {
  const [roomImage, setRoomImage] = useState(null);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/chat" element={
            <ChatInterface roomImage={roomImage}>
              <ImageUpload onImageUpload={setRoomImage} />
            </ChatInterface>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
