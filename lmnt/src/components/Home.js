import './Home.css';
import React /*{useState}*/ from 'react';
import Sidebar from './Sidebar';
import Chat from './Chat';
// import Login from './Login';
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';
// import {useStateValue} from './StateProvider';


function Home() {
  // const [{user}, dispatch] = useStateValue();
  return (
    <div className="app_body">
      <Router>
        <Sidebar/>
        <Switch>
          <Route path="home/rooms/:roomId">
            <Chat/>
          </Route>
          <Route path="/home">
            <Chat/>
          </Route>              
        </Switch>            
      </Router>
    </div>

  );
}



export default Home;

