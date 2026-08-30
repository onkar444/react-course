import { useEffect, useRef, useState } from 'react'
import { Chatbot } from 'supersimpledev'
import './App.css'
import RobotProfileImage from './assets/robot.png'
import UserProfileImage from './assets/user.png'



function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState('');


  function saveInputText(e) {
    setInputText(e.target.value);
  }

  function sendMessage() {

    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID()
      }
    ];

    setChatMessages(newChatMessages);

    const response = Chatbot.getResponse(inputText);
    setChatMessages([
      ...newChatMessages, {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID()
      }
    ])

    setInputText('');
  }
  return (
    <div className="chat-input-container">
      <input
        className="chat-input"
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        value={inputText} />
      <button className="send-button" onClick={sendMessage}>Send</button>
    </div>
  )
}

function ChatMessage({ message, sender }) {

  return (
    <div className={
      sender === 'user'
        ? 'chat-message-user'
        : 'chat-message-robot'}>
      {sender === "robot" && <img src={RobotProfileImage} className="chat-message-profile" />}
      <div className="chat-message-text">
        {message}
      </div>
      {sender === "user" && <img src={UserProfileImage} className="chat-message-profile" />}
    </div>
  );
}

function ChatMessages({ chatMessages }) {

  const chatMessagesRef = useRef(null);

  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id} />
        )
      })}
    </div>
  );
}


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
