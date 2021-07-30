import React from "react";
import "./profile.css";

function Profile() {
  return (
    <div class="container">
      <div class="title">Profile</div>
      <div class="content">
        <form action="#">
          <div class="user-details"></div>
          <label for="userGender">your gender</label>
          <select name="gender" id="gender">
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="other">other</option>
          </select>
          <label for="perferedGender">your prefered ender</label>
          <select name="gender" id="gender">
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="other">other</option>
          </select>
          <label for="gender">age range</label>
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
        <label for="personalityType">Your personalityType</label>
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
          <div class="button">
            <input type="submit" value="Continue" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
