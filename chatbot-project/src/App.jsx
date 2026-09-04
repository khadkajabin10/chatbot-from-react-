import { useState } from "react";

import { ChatInput } from "./components/ChatInput.jsx";

import "./App.css";

import ChatMessages from "./components/ChatMessages.jsx";

function App() {
  const array = useState([
    /* {
      message: "hello Chatbot",
      sender: "user",
      id: "id1",
    },
    {
      message: "Hello! How can I help you",
      sender: "robot",
      id: "id2",
    },
    {
      message: "can you get mme todays date?",
      sender: "user",
      id: "id3",
    },
    {
      message: "today is sept 27",
      sender: "robot",
      id: "id4",
    },*/
  ]);

  const chatMessages = array[0]; //shorcut const [chatMessage,setChatMessages]=array; orders matter ok ,
  const setChatMessages = array[1];

  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
