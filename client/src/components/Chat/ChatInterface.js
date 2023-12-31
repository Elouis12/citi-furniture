import React, { useState } from 'react';
import ChatMessage from './ChatMessage';
import Spline from '@splinetool/react-spline';

function ChatInterface({ roomImage, children }) {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages(prevMessages => [...prevMessages, { text: inputValue, sender: 'user' }]);
      setInputValue('');
    }
  };

  return (
    <>
      {/* Spline Background */}
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

      <div style={{
        fontFamily: 'Roboto, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
       // backgroundColor: '#2C3A47',
        alignItems: 'center',  // Center content
        justifyContent: 'center',  // Vertically center
        position: 'relative',  // Relative position to overlay the Spline background
      }}>
        <div style={{
          maxWidth: '600px',
          padding: '20px',
          borderRadius: '15px',
          backgroundColor: '#f5e1da',
        }}>
          <img src="/decorAItor_logo-removebg-preview.png" alt="Logo" style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} />
          {roomImage && <img src={roomImage} alt="Room View" style={{ width: '100%', marginBottom: '20px', borderRadius: '10px' }} />}
          {children}
          <div className="chat-window" style={{
            flex: 1,
            padding: '20px',
            maxHeight: '400px',
            overflowY: 'scroll',
            borderRadius: '10px',
            backgroundColor: '#f4f4f4',
            marginBottom: '20px'
          }}>
            {messages.map((msg, index) => (
              <ChatMessage key={index} message={msg} />
            ))}
          </div>
          <div className="chat-input" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '10px'
          }}>
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Give me design ideas..."
              style={{
                flex: 1,
                padding: '10px 15px',
                borderRadius: '30px',
                border: '1px solid #ccc',
                backgroundColor: 'white'
              }}
            />
            <button
              onClick={handleSendMessage}
              style={{
                padding: '10px 15px',
                borderRadius: '30px',
                backgroundColor: '#2C3A47',
                color: 'white',
                border: 'none',
                cursor: 'pointer'
              }}>
              Design
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatInterface;
