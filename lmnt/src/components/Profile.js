import React from "react";
import "./profile.css";
import { useStateValue } from "../StateProvider";
import db from "../firebase";
import { Link } from "react-router-dom";

fetch("https://opentdb.com/api.php?amount=50&category=12")
  .then((res) => res.json())
  .then((data) => console.log(data));

function Profile() {
  // eslint-disable-next-line no-unused-vars
  const [{ user }, dispatch] = useStateValue();
  function addUser() {
    db.collection("users").add({
      name: user.displayName,
      email: user.email,
      PersonalityType: "INTP",
      gender: "male",
      genderPreference: "woman",
    });
    console.log(user);
  }

  function setButtons(gender) {
    let xty = gender;
    console.log(xty);
  }

  return (
    <div className="container">
      <div className="content">
        <form action="#">
          <div className="profile-text">
            <h4>You need to set up your profile before we can find you a match </h4>
            <h4>
              You will also need to know what your personality type is, If you
               don't already know you can find out <a target="_blank" href="https://www.16personalities.com/free-personality-test" rel="noreferrer">here</a>
               {/*<span><Link to={`/home`}>
            <button
              className="add-new-chat-title"
            >
              here 
            </button>
          </Link>           
          </span> */}
            </h4>
          </div>
          <div className="user-details">
            <label htmlFor="userGender">I'm a</label>
            <select name="gender" id="gender">
              <option value="male" onClick={setButtons("male")}>
                male
              </option>
              <option value="female">female</option>
              <option value="other">other</option>
            </select>
          </div>
          <div className="user-details">
            <label htmlFor="perferedGender">I'm looking for a</label>
            <select name="gender" id="gender">
              <option value="male">male</option>
              <option value="female">female</option>
              <option value="other">other</option>
            </select>
          </div>
          <div className="user-details">
            <label htmlFor="gender">I'm x years old</label>
            <select name="gender" id="gender">
              <option value="age">all</option>
              <option value="age">18</option>
              <option value="age">19</option>
              <option value="age">21</option>
              <option value="age">22</option>
              <option value="age">23</option>
              <option value="age">24</option>
              <option value="age">25</option>
              <option value="age">26</option>
              <option value="age">27</option>
              <option value="age">28</option>
              <option value="age">29</option>
              <option value="age">30</option>
            </select>
          </div>
          <div className="user-details">
            <label htmlFor="personalityType">My personalityType</label>
            <select name="personalityType" id="personalityType">
              <option value="ISTJ">ISTJ</option>
              <option value="ISTP">ISTP</option>
              <option value="ISFJ">ISFJ</option>
              <option value="ISFP">ISFP</option>
              <option value="INFJ">INFJ</option>
              <option value="INFP">INFP</option>
              <option value="INTJ">INTJ</option>
              <option value="INTP">INTP</option>
              <option value="ESTP">ESTP</option>
              <option value="ESTJ">ESTJ</option>
              <option value="ESFP">ESFP</option>
              <option value="ESFJ">ESFJ</option>
              <option value="ENFP">ENFP</option>
              <option value="ENFJ">ENFJ</option>
              <option value="ENTP">ENTP</option>
              <option value="ENTJ">ENTJ</option>
            </select>
          </div>
          <Link to={`/home`}>
            <button
              onClick={addUser}
              className="add-new-chat-title"
              id="profile-btn"
            >
              add
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Profile;
