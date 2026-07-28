import { useState, useRef, useEffect } from "react";
import { chatbot } from "supersimpledev";

import "./App.css";
import RobotProfileImage from "./assets/chatbot.jpg";
import UserProfileImage from "./assets/man.jpg";
function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState();
  function saveInputText(event) {
    setInputText(event.target.value); //Here you're calling the function setInputText and passing it a value. you are not assing to setinputtext
  }
  function sendMessage() {
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];
    setChatMessages(newChatMessages);
    const response = chatbot.getResponse(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);
    setInputText("");
  }
  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        value={inputText}
        className="input"
      />
      <button onClick={sendMessage} className="send-button">
        Send
      </button>
    </div>
  );
}
function ChatMessage({ message, sender }) {
  //this or this ChatMessage(props ) then  const message = props.message;
  //const message = props.message;
  //const sender = props.sender;

  if (sender === "robot") {
    return (
      <div className="chat-robot">
        <img
          src={RobotProfileImage}
          width="50"
          height="50"
          style={{ borderRadius: "50%" }}
        />
        <div class="message">{message}</div>
      </div>
    );
  } else {
    return (
      <div className="chat-user">
        <div class="message">{message}</div>

        <img
          src={UserProfileImage}
          width="50"
          height="50"
          style={{ borderRadius: "50%" }}
        />
      </div>
    );
  }
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
            key={chatMessage.id}
          />
        );
      })}
    </div>
  );
}

function App() {
  const array = useState([
    {
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
    },
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
