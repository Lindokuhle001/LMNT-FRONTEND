import React, { useState /*useEffect*/ } from "react";
import MicIcon from "@material-ui/icons/Mic";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import "./Chat.css";
import { useParams } from "react-router-dom";
// import { useStateValue } from "./StateProvider";
// import { Avatar, IconButton } from "@material-ui/core";
// import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";

function Chat() {
  const [input, setInput] = useState("");
  // const [seed, setSeed] = useState("");
  const { roomId } = useParams();
  // const [roomName, setRoomName] = useState("");
  // const [messages, setMessages] = useState([]);
  // const [{ user }, dispatch] = useStateValue();

  // useEffect(() => {
  //   if (roomId) {
  //     db.collection("rooms")
  //       .doc(roomId)
  //       .onSnapshot((snapshot) => {
  //         setRoomName(snapshot.data().name);
  //       });

  //     db.collection("rooms")
  //       .doc(roomId)
  //       .collection("messages")
  //       .orderBy("timestamp", "asc")
  //       .onSnapshot((snapshot) => {
  //         setMessages(snapshot.docs.map((doc) => doc.data()));
  //       });
  //   }
  // }, [roomId]);

  // useEffect(() => {
  //   setSeed(Math.floor(Math.random() * 5000));
  // }, [roomId]);

  const sendMessage = (e) => {
    e.preventDefault();
    // db.collection("rooms").doc(roomId).collection("messages").add({
    //   message: input,
    //   name: user.displayName,
    //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    // }*/);

    setInput("");
  };

  const messages = [
    {
      name: "lindo",
      message: "hey",
      timestamp: "12:00",
    },
    {
      name: "mpilo",
      message: "hey",
    },
    {
      name: "lindo",
      message: "how are you",
    },
  ];

  return (
    <div className="Chat">
      <div className="Chat_headerRight">
        {/* <div className="Chat_header">
          <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
          <div className="Chat_headerInfo">
            <h3 className="Chat-room-name">{roomName}</h3>
            <p className="Chat-room-last-seen">
              Last seen{" "}
              {new Date(
                messages[messages.length - 1]?.timestamp?.toDate()
              ).toUTCString()}
            </p>
            <IconButton>
              <SearchOutlined />
            </IconButton>
            <IconButton>
              <AttachFile />
            </IconButton>
            <IconButton>
              <MoreVert />
            </IconButton>
          </div>
        </div> */}
      </div>
      <div className="Chat_body">
        {messages.map((message) => (
          <p className="Chat_message">
            <span className="Chat_name">{message.name}</span>
            {message.message}
            {/* <span className="Chat_timestemp">
                {new Date(message.timestamp?.toDate()).toUTCString()}
              </span> */}
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
