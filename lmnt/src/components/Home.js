import "./Home.css";
import React from "react";
import Sidebar from "./Sidebar";
import HeroSection from "./HeroSection";
// import Signup from "./Signup";
import Chat from "./Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { useStateValue } from "../StateProvider";

function Home() {
  return (
    <div className="app_body">
      <Router>
        <Sidebar />
        <HeroSection />
        <Switch>
          <Route path="/home/rooms/:roomId">
            <Chat />
          </Route>
          {/* <Route path="/">
            <HeroSection />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default Home;
