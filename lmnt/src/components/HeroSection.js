import React from "react";
import "./HeroSection.css";
import coupleImage from "../images/welcomeCouple.png";

function HeroSection() {
  return (
    <div className="hero">
      <h2>Have fun while making real lasting connections</h2>
      <img className="couple" alt="" src={coupleImage} height={170} width={247} />
    </div>
  );
}

export default HeroSection;
