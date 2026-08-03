import { useRef, useEffect } from "react";
import { ChatMessage } from "./chatMessage";
import "./ChatMessages.css";

function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useRef(null); //Because React has not created the HTML yet. so current =null look down after div ref=chatmessagesref that is store here after creating div
  //The page has finished rendering."Only now does it execute:useEffect
  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]); //chatmessages is dependency array "Run this effect whenever chatMessages changes."
  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map(
        (chatMessage) => {
          //aak aak gari pick garera lauxa ani chatmessage lai dinxa
          return (
            <ChatMessage
              message={chatMessage.message}
              sender={chatMessage.sender}
              key={chatMessage.id}
            />
          );
        } /*
      chatMessages (array)
        │
        ▼
.map()
        │
        ▼
Take first object
        │
        ▼
Create <ChatMessage />
        │
        ▼
Take second object
        │
        ▼
Create <ChatMessage />
        │
        ▼
Take third object
        │
        ▼
Create <ChatMessage />
        │
        ▼
React displays all the messages
      
      */,
      )}
    </div>
  );
}
export default ChatMessages;
