import { useState } from 'react'
import './App.css'
import ChatInput from './components/ChatInput';
import ChatMessages from './components/ChatMessages';

function App() {
  const [chatMessages, setChatMessages] = useState([
    {
      message: "hello chatbot",
      sender: "user",
      id: 'id1'
    },
    {
      message: "Hello! How can I help you?",
      sender: "robot",
      id: 'id2'
    },
    {
      message: "can you get me today's date?",
      sender: "user",
      id: 'id3'
    },
    {
      message: "Today's date is September 21",
      sender: "robot",
      id: 'id4'
    }
  ]);

  return (
    <div className="app-container">

      <ChatMessages
        chatMessages={chatMessages}
        setChatMessages={setChatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages} />
    </div>
  );
}

export default App
