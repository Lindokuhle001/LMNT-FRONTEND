import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import PersonalityTest from "./PersonalityTest";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue(null);
  return (
    <>
    <Router>
      {!user ? (
        <Signup setUser={dispatch} />
      ) : (
      <Router>
        <Navbar />
        <Switch>
          
          <Route path="/home" component={Home} />
          <Route path="/" exact component={Home} />
          <Route path="/personalty-test" component={PersonalityTest} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
       )} 
       </Router>
    </>
  );
}

export default App;
