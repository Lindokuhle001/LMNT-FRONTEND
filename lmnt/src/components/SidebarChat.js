import React, {useEffect, useState} from 'react';
import {Avatar} from "@material-ui/core";
import './SidebarChat.css';
import {Link} from 'react-router-dom';
import db from '../firebase';
import { useStateValue } from "../StateProvider";

function SidebarChat({id,name,addNewChat}) {
    const [seed, setSeed] = useState("");
    const [messages, setMessages] = useState("");
    const [match, setMatch] = useState("");
    const [{ user }, dispatch] = useStateValue();
    // console.log(user.displayName)

    
    useEffect(() => {
        if(id){
            db.collection('rooms').doc(id).collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot => {
                setMessages(snapshot.docs.map((doc) => doc.data()))
            })
        }
    }, [id]);

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));        
    }, []);
    // add new match
    const createChat = () => {
        db.collection('users').onSnapshot((snapshot) => {
            setMatch(snapshot.docs.map((doc) => doc.data()).filter((user) => user.PersonalityType).pop().name);
          })
          console.log(match)
        if(match){
            db.collection("rooms").add({
                name: match,
                users :[match,user.displayName]
            })
        }
    };

    return !addNewChat ? (
        <Link to={`/home/rooms/${id}`} key={id}>
            <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="sidebarChat_info">
                    <h2>{name}</h2>
                    <p>{messages[0]?.message}</p>
                </div>
            </div>
        </Link>
        
    ) : (
        <div onClick={createChat} className="sidebarChat">
            <button  className="add-new-chat-title">Get New Match</button>
        </div>
    )
}

export default SidebarChat
