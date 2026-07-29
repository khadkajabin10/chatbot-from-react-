import RobotProfileImage from "../assets/chatbot.jpg";
import UserProfileImage from "../assets/man.jpg";
import './ChatMessage.css'
export function ChatMessage({ message, sender }) {
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
        <div className="message">{message}</div>
      </div>
    );
  } else {
    return (
      <div className="chat-user">
        <div className="message">{message}</div>

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
