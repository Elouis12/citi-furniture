import React, { useState } from 'react';
import ChatMessage from './ChatMessage';
import TitleBar from '../TitleBar';
import Footer from '../Footer';

function ChatInterface({ roomImage, children }) {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = async () => {
    // ... [rest of the handleSendMessage function]
  };

  return (
    <>
      <TitleBar />
      
      <div style={{ maxWidth: '600px', margin: 'auto', fontFamily: 'Roboto, sans-serif', display: 'flex', flexDirection: 'column', height: 'calc(100vh - 120px)' }}> 
        {/* Adjusted height to account for TitleBar and Footer */}
        <img src="/decorAItor_logo-removebg-preview.png" alt="Logo" style={{ position: 'absolute', top: '10px', left: '10px', height: '50px', zIndex: 1 }} />
        {roomImage && <img src={roomImage} alt="Room View" style={{ width: '100%', marginBottom: '20px', fontFamily: 'Roboto, sans-serif' }} />}
        {children}
        <div className="chat-window" style={{ flex: 1, border: '1px solid #ccc', padding: '20px', maxHeight: '400px', overflowY: 'scroll', borderRadius: '5px', backgroundColor: '#f4f4f4', fontFamily: 'Roboto, sans-serif' }}>
          {messages.map((msg, index) => (
            <ChatMessage key={index} message={msg} />
          ))}
        </div>
        <div className="chat-input" style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'Roboto, sans-serif' }}>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Give me design ideas"
            style={{ width: '80%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', fontFamily: 'Roboto, sans-serif' }}
          />
          <button 
            className="robotoFont"
            onClick={handleSendMessage} 
            style={{ 
              width: '18%', 
              padding: '10px', 
              borderRadius: '5px', 
              backgroundColor: 'black', 
              color: 'white', 
              border: 'none', 
              cursor: 'pointer'
            }}>
            Design
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ChatInterface;