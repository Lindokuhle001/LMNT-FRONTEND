import "./Home.css";
import React from "react";
import Sidebar from "./Sidebar";
import Signup from "./Signup";
import Chat from "./Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useStateValue} from '../StateProvider';

function Home() {
  const [{user}, setUser] = useStateValue(null);
  return (
    <div className="app_body">
      {!user ? (
        <Signup setUser={setUser}/>
      ) : (
        <Router>
          <Sidebar />
          <Switch>
            <Route path="home/rooms/:roomId">
              <Chat />
            </Route>
            <Route path="/home">
              <Chat />
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default Home;
