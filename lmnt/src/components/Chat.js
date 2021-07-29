import { React, useState, useEffect } from "react";
import MicIcon from "@material-ui/icons/Mic";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import "./Chat.css";
// import { useParams } from "react-router-dom";
import { useParams } from "react-router-dom";
import db from "../firebase";
import firebase from "firebase";
import { useStateValue } from "../StateProvider";

function Chat() {
  const [input, setInput] = useState("");
  const [question, setQuestion] = useState("whats your name?");
  // const [seed, setSeed] = useState("");
  const { roomId } = useParams();
  const [messages, setMessages] = useState([]);
  const [{ user }, dispatch] = useStateValue();


  useEffect(() => {
    if (roomId) {
      // db.collection("rooms")
      //   .doc(roomId)
      //   .onSnapshot((snapshot) => {
      //     setRoomName(snapshot.data().name);
      //   });

      // db.collection("rooms")
      //   .doc(roomId)
      //   .collection("messages")
      //   .orderBy("timestamp", "asc")
      //   .onSnapshot((snapshot) => {
      //     setMessages(snapshot.docs.map((doc) => doc.data()));
      //   });
      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) => {
          setMessages(snapshot.docs.map((doc) => doc.data()));
        }); 

    }
  }, [roomId]);

  // useEffect(() => {
  //   setSeed(Math.floor(Math.random() * 5000));
  // }, [roomId]);

  function getQuestion() {
    return setQuestion((q) => q + "what? ");
  }

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("rooms").doc(roomId).collection("messages").add({
      message: input,
      name: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };


  return (
    <div className="Chat">
      <div className="Chat_headerRight">
        <div className="Chat_header">
          <p> {question}</p>
          <button onClick={getQuestion} className="next_quetion">
            next
          </button>
        </div>
      </div>
      <div className="Chat_body">
        {/* <p>hello</p> */}
        {messages.map((message) => (
          
          <p
            className={`Chat_message ${
              message.name === user.displayName && "Chat_receiver"
            }`}
          >{console.log('hello world')}
            <span className="Chat_name">{message.name}</span>
            {message.message}
            <span className="Chat_timestemp">
              {new Date(message.timestamp?.toDate()).toUTCString()}
            </span>
          </p>
        ))}
      </div>
      <div className="Chat_footer">
        <InsertEmoticonIcon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type a message"
          />
          <button type="submit" onClick={sendMessage}>
            {" "}
            Send a Message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
