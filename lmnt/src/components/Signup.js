import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import {auth,provider} from '../firebase';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../Reducer';



function Signup() {
  const [{},dispatch] = useStateValue();
const signIn = () => {
    auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        })
        .catch((error) => alert(error.message));
}

  return (
    <div className="hero-container">
      <h1>LET'S PLAY</h1>
      <p>SIGNUP WITH?</p>
      <div className="hero-btns">
        <Button
          type="submit"
          onClick={signIn}
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GOOGLE
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          FACEBOOK
        </Button>
      </div>
    </div>
  );
}

export default Signup;
