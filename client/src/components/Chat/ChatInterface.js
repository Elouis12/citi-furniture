import React, { useState } from 'react';
import ChatMessage from './ChatMessage';
import TitleBar from '../TitleBar';


function ChatInterface({ roomImage, children }) {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = async () => {
    if (inputValue.trim()) {  // check if input is not just whitespace
        // Add the new message to the list of messages.
        setMessages(prevMessages => [...prevMessages, { text: inputValue, sender: 'user' }]);
        
        // Clear the input field.
        setInputValue('');
        
        // Here, you might want to also send the message to a backend service or 
        // some other processing, depending on your requirements.
    }
};

  return (
    <>
      <TitleBar />

      <div style={{
        margin: 'auto',
        fontFamily: 'Roboto, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        backgroundColor: '#2C3A47',
      }}>
        <div style={{
          maxWidth: '600px',
          margin: 'auto',
          padding: '20px',
          borderRadius: '15px'
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
            backgroundColor: '#f5e1da',
            fontFamily: 'Roboto, sans-serif',
            marginBottom: '20px'
          }}>
            {messages.map((msg, index) => (
              <ChatMessage key={index} message={msg} />
            ))}
          </div>
          <div className="chat-input" style={{
            display: 'flex',
            justifyContent: 'flex-start',
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
                backgroundColor: '#f5e1da'
              }}
            />
            <button
              onClick={handleSendMessage}
              style={{
                padding: '10px 15px',
                borderRadius: '30px',
                backgroundColor: '#f5e1da',
                color: '#2C3A47',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'Roboto, sans-serif'
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