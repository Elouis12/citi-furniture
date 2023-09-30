import React from 'react';

function ChatMessage({ message }) {
  const isUser = message.sender === 'user';
  
  return (
    <div style={{ textAlign: isUser ? 'right' : 'left', margin: '10px 0' }}>
      <div style={{
        display: 'inline-block',
        borderRadius: '10px',
        padding: '10px',
        backgroundColor: isUser ? '#007BFF' : '#EAEAEA',
        color: isUser ? 'white' : 'black'
      }}>
        <p style={{ margin: 0 }}>{message.content}</p>
      </div>
    </div>
  );
}

export default ChatMessage;
