import { React, useState, useEffect } from "react";
import "./Sidebar.css";
// import {SearchOutlined} from "@material-ui/icons";
import SidebarChat from "./SidebarChat";
import db from "../firebase";
// import { useStateValue } from './StateProvider';
// import { useStateValue } from './StateProvider';
// import {Avatar} from "@material-ui/core";

function Sidebar(props) {
  const [rooms, setRooms] = useState([]);
  // const [{user},dispatch] = useStateValue();

  useEffect(() => {

      db.collection("rooms").onSnapshot((snapshot) =>
            console.log(snapshot.docs

          .map((doc) => ({
            id: doc.id,
            data: doc.data(),
          })).filter((a) => a.data.users === 'mpilo')
      )
    );

    const unsubscribe = db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs
          .map((doc) => ({
            id: doc.id,
            data: doc.data(),
          })).filter((a) => a.data.users === 'mpilo')
      )
    );

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="sidebar">
      {/* <div className="sidebar_header">
                <Avatar src={user?.photoURL}/>

            </div> */}
      {/* <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlined />
                    <input type="text" placeholder="Search or start new chat"/>
                </div>
            </div> */}
      <div className="sidebar_chats">
        <SidebarChat addNewChat />
        {rooms.map((room) => (
          <SidebarChat key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
