import React/*, {useState,useEffect}*/ from 'react';
import './Sidebar.css';
import {SearchOutlined} from "@material-ui/icons";
import SidebarChat from "./SidebarChat";
// import { useStateValue } from './StateProvider';
// import {Avatar} from "@material-ui/core";

function Sidebar(props) {

    const matchList = [
        {
            name : 'lindo',
            id : 'fejfrqbvurfufv',
            myMessages : ['hi','how']
        },
        {
            name : 'mpilo',
            id : 'fejfrqbvurfufv',
            myMessages : ['hi','how']
        },
        {
            name : 'thembeka',
            id : 'fefiurfrevf',
            myMessages : ['hi','how']
        },
        {
            name : 'thabang',
            id : 'fefiurfufv',
            myMessages : ['hi','how']

        }
    ]

    // const [rooms, setRooms] = useState([]);
    // const [{user},dispatch] = useStateValue();



    // useEffect(() => {
    //     const unsubscribe = db.collection('rooms').onSnapshot(snapshot => (
    //         setRooms(snapshot.docs.map(doc => (
    //             {
    //                 id: doc.id,
    //                 data: doc.data()
    //             }
    //         )

    //         ))
    //     ));

    //     return () => {
    //         unsubscribe();
    //     }
    // },[]); 

    return (
        <div className="sidebar">
            <div className="sidebar_header">
                {/* <Avatar src={user?.photoURL}/> */}

            </div>
            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlined />
                    <input type="text" placeholder="Search or start new chat"/>
                </div>
            </div>
            <div className="sidebar_chats">
                <SidebarChat addNewChat/>
                {matchList.map(room=> (
                    <SidebarChat key={room.id} id={room.id} name={room.name}/>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;