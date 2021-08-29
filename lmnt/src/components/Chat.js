import { React, useState, useEffect } from "react";
import MicIcon from "@material-ui/icons/Mic";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import "./Chat.css";
import "../index.css";
import { useParams } from "react-router-dom";
import db from "../firebase";
import firebase from "firebase";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function Chat() {
  const [input, setInput] = useState("");
  const [question, setQuestion] = useState(
    "If you could live anywhere, where would it be?"
  );
  // const [seed, setSeed] = useState("");
  const { roomId } = useParams();
  const [messages, setMessages] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    if (roomId) {
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
  // let nextQuestion
  function getQuestion() {
    let randomNumber = () => {
      return Math.floor(Math.random() * 10);
    };
    db.collection("questions").onSnapshot((snapshot) => {
      setQuestion(
        snapshot.docs.map((doc) => doc.data())[randomNumber()].question
      );
    });
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
          {/* <p> {question}</p>*/}
          <Popup
            trigger={<button className="next_quetion">Ice breakers</button>}
            position="right center"
          >
            <div className="card">
              <p>{question}</p>
              <button onClick={getQuestion}>Skip</button>
              <button onClick={getQuestion}>Ask</button>
            </div>
          </Popup>
          <Popup
            trigger={
              <button className="next_quetion">Two truths and a lie</button>
            }
            position="right center"
          >
            <div className="card">
              <p>
                Play two truths and a lie. Click play then share your too truths
                and a lie
              </p>
              <button onClick={getQuestion}>play</button>
            </div>
          </Popup>
          {/* <Link to="/Trivia" className="navbar-logo" >
            <button  className="next_quetion">
            play trivia
          </button>
          </Link> */}
          <Popup
            trigger={
              <button className="next_quetion">
                Your Match's personality Type
              </button>
            }
            position="right center"
          >
            <div className="card">
              <p>
                Find out more about your match's personality and why you were
                matched with them So that you can build a stronger connection
                with them
              </p>
              <button onClick={getQuestion}>learn more</button>
            </div>
          </Popup>
          <Popup trigger={<button className="next_quetion">unmatch</button>} position="center center">
            <div>Popup content here !!</div>
          </Popup>
          
        </div>
      </div>
      <div className="Chat_body">
        {messages.map((message) => (
          <p
            className={`Chat_message ${
              message.name === user.displayName && "Chat_receiver"
            }`}
            key={message.timestamp}
          >
            {message.message}
            <span className="Chat_timestemp">
              {new Date(message.timestamp?.toDate())
                .toUTCString()
                .slice(18, 22)}
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
