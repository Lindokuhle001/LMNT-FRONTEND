import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import "./SidebarChat.css";
import { Link } from "react-router-dom";
import db from "../firebase";
import { useStateValue } from "../StateProvider";
import { Button } from "./Button";

function SidebarChat({ id, name, addNewChat }) {
  //   const [seed, setSeed] = useState("");
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

  //   useEffect(() => {
  //     setSeed(Math.floor(Math.random() * 5000));
  //   }, []);
  // add new match
  const createChat = () => {
    db.collection("users").onSnapshot((snapshot) => {
      setMatch(
        snapshot.docs
          .map((doc) => doc.data())
          .filter((user) => user.PersonalityType)
          .pop().name
      );
    });

    if (match) {
      db.collection("rooms").add({
        name: match,
        users: [match, user.displayName],
        visible: true,
      });
    }
  };

  function unMatch(identity) {
    //  console.log(id);

    db.collection("rooms").doc(identity).update({
      users: [],
    });
  }

  function unMatchToggle(identity) {
    console.log(identity);
    setToggle(() => {
      if (toggle === false) {
        // console.log(toggle);
        return true;
      }
      return toggle === false;
    });
    console.log(id);
    // db.collection("rooms").doc(id).update({
    //     visible: toggle,
    //   });
  }
  // onClick={unMatch(id)}

  return !addNewChat ? (
    <Link to={`/home/rooms/${id}`} key={id}>
      <div className="sidebarChat">
        <Avatar src={match?.photoURL} />
        <div className="sidebarChat_info">
          <h3>{name}</h3>
          <p>{messages[0]?.message}</p>
        </div>

        <button
          className={
            toggle === true ? "unMatch_button_on" : "unMatch_button_off"
          }
          type="submit"
          onClick={() => {
            unMatch(id);
            console.log(id);
          }}
        >
          X
        </button>
      </div>
    </Link>
  ) : (
    <div className="sidebarChat">
      <button onClick={createChat} className="add-new-chat-title">
        Get New Match
      </button>
          
        {console.log('id')}
      <button
        className="add-new-chat-title"
        onClick={() => {
          unMatchToggle(id);
          console.log(id);
        }}
      >
        Remove Match
      </button>
    </div>
  );
}

export default SidebarChat;
