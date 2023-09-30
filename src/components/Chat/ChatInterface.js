import React, { useState } from 'react';
import ChatMessage from './ChatMessage';

function ChatInterface({ roomImage, children }) {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = async () => {
    if (!inputValue.trim()) {
      return; // Exit if the input is only whitespace or empty.
    }

    const userMessage = { sender: 'user', content: inputValue };
    setMessages(prevMessages => [...prevMessages, userMessage]);

    try {
        const response = await fetch("/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message: inputValue })
        });

        // This is where you log the raw server response for debugging
        const rawResponse = await response.text();
        console.log("Server Response:", rawResponse);

        // After logging, you try to parse it as JSON (make sure the response is actually valid JSON!)
        const data = JSON.parse(rawResponse);

        const gpt4Response = { sender: 'gpt-4', content: data.message };
        setMessages(prevMessages => [...prevMessages, gpt4Response]);

    } catch (error) {
        console.error("Error calling server:", error);
    }

    setInputValue('');
};


  return (
    <div style={{ maxWidth: '600px', margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
      {roomImage && <img src={roomImage} alt="Room View" style={{ width: '100%', marginBottom: '20px' }} />}
      {children}
      <div className="chat-window" style={{ border: '1px solid #ccc', padding: '20px', maxHeight: '400px', overflowY: 'scroll', borderRadius: '5px', backgroundColor: '#f4f4f4' }}>
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg} />
        ))}
      </div>
      <div className="chat-input" style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ask me anything..."
          style={{ width: '80%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <button onClick={handleSendMessage} style={{ width: '18%', padding: '10px', borderRadius: '5px', backgroundColor: '#007BFF', color: 'white', border: 'none', cursor: 'pointer' }}>
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatInterface;