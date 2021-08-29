import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import "./SidebarChat.css";
import { Link } from "react-router-dom";
import db from "../firebase";
import { useStateValue } from "../StateProvider";
import { Button } from "./Button";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

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
          .filter((user) => user)
          .pop().name
      );
    });

    if (match) {
      db.collection("rooms").add({
        name: match,
        users: [match, user.displayName],
        // visible: true,
      });
    }
  };

  function unMatch(identity) {
    db.collection("rooms").doc(identity).update({
      users: [],
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  // function unMatchToggle() {
  //   setToggle(() => {
  //     if (toggle === false) {
  //       return true;
  //     }
  //     return false;
  //   });
  //   db.collection("rooms").doc(id).update({
  //       visible: toggle,
  //     });
  // }
  // onClick={unMatch(id)}

  return !addNewChat ? (
    <Link to={`/home/rooms/${id}`} key={id}>
      <div className="sidebarChat">
        <Avatar src={match?.photoURL} />
        <div className="sidebarChat_info">
          <h3>{name}</h3>
          <p>{messages[0]?.message}</p>
        </div>

        <Popup
          trigger={
            <button onClick={handleSubmit} className="next_quetion">
              {" "}
              x
            </button>
          }
          position="right center"
        >
          <p>Are you sure you want to unmatch with this person </p>
          <button
            className="unMatch_button_on"
            type="submit"
            onClick={() => {
              unMatch(id);
            }}
          >
            unmatch
          </button>
        </Popup>
      </div>
    </Link>
  ) : (
    <div className="sidebarChat">
      <button onClick={createChat} className="add-new-chat-title">
        Get New Match
      </button>
      {/* <button
        className="add-new-chat-title"
        onClick={() => {
          unMatchToggle(id);
          console.log(id);
        }}
      >
        Remove Match
      </button> */}
    </div>
  );
}

export default SidebarChat;
