import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import { auth, provider } from "../firebase";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../Reducer";
import coupleImage from "../images/welcomeCouple.png";

function Signup() {
  const [{}, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="hero-container">
      <div className="welcome-text">
        <p className="welcome-text-paragraph">
          My Element helps you make real connections while having fun. Login and
          have the perfect experience.
        </p>
      </div>

      <p className="lets-play-text">LET'S PLAY</p>
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
      <img alt="" src={coupleImage} height={461} width={322} />
      
    </div>
  );
}

export default Signup;
