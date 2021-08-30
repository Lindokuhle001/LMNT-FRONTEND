import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import "./SidebarChat.css";
import { Link } from "react-router-dom";
import db from "../firebase";
import { useStateValue } from "../StateProvider";
// import { Button } from "./Button";
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

  // function handleSubmit(event) {
  //   event.preventDefault();
  // }

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

  // .includes(user.email);

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
            <button  className="next_quetion">
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
      {searchUsers()}
      {console.log(toggle)}
      {toggle === false ? (
        <Link to="/Profile">
          <button 
          onClick={() => window.location.reload()}
          className="add-new-chat-title">
            Get New Match
          </button>
        </Link>
      ) : (
        <button onClick={createChat} className="add-new-chat-title">
          Get New Match
        </button>
      )}

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
