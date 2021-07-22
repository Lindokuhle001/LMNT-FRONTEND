import React, {useEffect, useState} from 'react';
import {Avatar} from "@material-ui/core";
import './SidebarChat.css';
import {Link} from 'react-router-dom';

function SidebarChat({id,name,addNewChat}) {
    const [seed, setSeed] = useState("");
    // const [messages, setMessages] = useState("");
    
    // useEffect(() => {
    //     if(id){
    //         db.collection('rooms').doc(id).collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot => {
    //             setMessages(snapshot.docs.map((doc) => doc.data()))
    //         })
    //     }
    // }, [id]);

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));        
    }, []);
    // add new match
    const addMatch = () => {
        // const roomName = prompt("Please Enter Name for Chat");
        // database
        // if(roomName){
        //     db.collection("rooms").add({
        //         name: roomName
        //     })
        // }
    };

    return !addNewChat ? (
        <Link to={`/home/rooms/${id}`} key={id}>
            <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="sidebarChat_info">
                    <h2>{name}</h2>
                    {/* <p>{messages[0]?.message}</p> */}
                </div>
            </div>
        </Link>
        
    ) : (
        <div onClick={addMatch} className="sidebarChat">
            <h3 className="add-new-chat-title">Get New Match</h3>
        </div>
    )
}

export default SidebarChat
