import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from './components/Profile';
import SignUp from './components/Signup';
import PersonalityTest from './PersonalityTest';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={SignUp} />
          <Route path='/home' component={Home} />
          <Route path='/personalty-test' component={PersonalityTest} />
          <Route path='/profile' component={Profile} />
        </Switch>
      </Router>
    </>
  );
}

export default App;