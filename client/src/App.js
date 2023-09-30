import React, { useState } from 'react';
import ImageUpload from './components/Chat/ImageUpload.js';
import ChatInterface from './components/Chat/ChatInterface.js';

function App() {
  const [roomImage, setRoomImage] = useState(null);

  return (
    <div className="App">
      <ChatInterface roomImage={roomImage}>
        <ImageUpload onImageUpload={setRoomImage} />
      </ChatInterface>
    </div>
  );
}

export default App;
