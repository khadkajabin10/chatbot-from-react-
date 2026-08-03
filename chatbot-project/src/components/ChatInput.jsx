import { useState } from "react";
import { chatbot } from "supersimpledev";
import './ChatInput.css';

export function ChatInput({ chatMessages, setChatMessages }) {//setchat messages for message not input 
  const [inputText, setInputText] = useState();//for input
  function saveInputText(event) {
    setInputText(event.target.value); /*Here you're creating the function setInputText and passing it a value. you are not assing to setinputtext
    event.target give which html elemet triggered this event , this event is triggred by <input ... /> see down , so you get input element , and value is what use type in input
    
    */
    
  }
  function sendMessage() {
    const newChatMessages = [//copied old message and add new ... do copy 
      ...chatMessages,
      {
        message: inputText,//you type hello is inputText
        sender: "user",//message send by user so user
        id: crypto.randomUUID(),
      },
    ];
    setChatMessages(newChatMessages);//add new meassage 
    const response = chatbot.getResponse(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);
    setInputText("");// this is for after sending send also there is text left to remove the text we setinputtext to empty after send button click
  }
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  }
  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        /*
        Notice something:

You wrote

onChange={saveInputText}

NOT

onChange={saveInputText()}

That means you're giving React the function, not calling it yourself.

It's like telling React:

"When the input changes, please call this function for me."
        */ 
        onKeyDown={handleKeyDown}
        value={inputText}
        className="input"
      />
      <button onClick={sendMessage} className="send-button">
        Send
      </button>
    </div>
  );
}
