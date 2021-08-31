import { React, useState, useEffect } from "react";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";
import db from "../firebase";
import { useStateValue } from "../StateProvider";
import { Avatar } from "@material-ui/core";

function Sidebar(props) {
  const [rooms, setRooms] = useState([]);
  // const [chatName, setChatName] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs
          .map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
          .filter((a) => {
            return a.data.users.includes(user.displayName);
          })
      )
    );

    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <h1>{user.displayName.split(' ').shift()}</h1>

        <Avatar src={user?.photoURL} />
      </div>
      {/* <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlined />
                    <input type="text" placeholder="Search or start new chat"/>
                </div>
            </div> */}
      <div className="sidebar_chats">
        <SidebarChat addNewChat />
        {rooms.map((room) => (
          <SidebarChat
            key={room.id}
            id={room.id}
            name={room.data.users
              .filter((myUser) => myUser !== user.displayName)
              .pop()
              .split(" ")
              .shift()}
          />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
