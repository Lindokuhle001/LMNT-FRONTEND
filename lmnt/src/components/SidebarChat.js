import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import "./SidebarChat.css";
import { Link } from "react-router-dom";
import db from "../firebase";
import { useStateValue } from "../StateProvider";

function SidebarChat({ id, name, addNewChat }) {
  const [messages, setMessages] = useState("");
  const [toggle, setToggle] = useState(true);
  const [match, setMatch] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setMessages(snapshot.docs.map((doc) => doc.data()));
        });
    }
  }, [id]);

  // add new match
  const createChat = () => {
    db.collection("users").onSnapshot((snapshot) => {
      setMatch(
        snapshot.docs
          .map((doc) => doc.data())
          .filter((user) => user)
          .pop().name
      );
    });

    if (match) {
      db.collection("rooms").add({
        name: match,
        users: [match, user.displayName],
      });
    }
  };

  function unMatch(identity) {
    db.collection("rooms").doc(identity).update({
      users: [],
    });
  }

  function searchUsers() {
    db.collection("users").onSnapshot((snapshot) => {
      setToggle(
        snapshot.docs
          .map((doc) => doc.data())
          .map((obj) => obj.email)
          .includes(user.email)
      );
    });
  }

  return !addNewChat ? (
    <Link to={`/home/rooms/${id}`} key={id}>
      <div className="sidebarChat">
        <Avatar src={match?.photoURL} />
        <div className="sidebarChat_info">
          <h3>{name}</h3>
          {/* <p>{messages[0].slice(0,9)?.message}</p> */}
        </div>
        <button
            className="add-new-chat-title"
            type="submit"
            onClick={() => {
              unMatch(id);
            }}
          >
            unmatch
          </button>

      </div>
    </Link>
  ) : (
    <div className="sidebarChat">
      {searchUsers()}
      {toggle === false ? (
        <Link to={`/Profile`}>
          <button 
          className="add-new-chat-title">
            Get New Match
          </button>
        </Link>
      ) : (
        <button onClick={createChat} className="add-new-chat-title">
          Get New Match
        </button>
      )}

    </div>
  );
}

export default SidebarChat;
