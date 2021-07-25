import React from "react";
import "./profile.css";

function Profile() {
  return (
    <div class="container">
      <div class="title">Profile</div>
      <div class="content">
        <form action="#">
          <div class="user-details">
            <div class="input-box">
              <span class="details">First Name</span>
              <input type="text" placeholder="Enter your First Name" required />
            </div>
            <div class="input-box">
              <span class="details">Date Of Birth</span>
              <input type="number" placeholder="YYYY/MM/DD" required />
            </div>
            <div class="input-box">
              <span class="details">Sexual Orientation</span>
              <input type="text" placeholder="Gender interested in" required />
            </div>
            <div class="input-box">
              <span class="details">Passion</span>
              <input type="text" placeholder="Enter your Passion" required />
            </div>
          </div>
          <div class="gender-details">
            <input type="radio" name="gender" id="dot-1" />
            <input type="radio" name="gender" id="dot-2" />
            <input type="radio" name="gender" id="dot-3" />
            <span class="gender-title">Gender</span>
            <div class="category">
              <label for="dot-1">
                <span class="dot one"></span>
                <span class="gender">Male</span>
              </label>
              <label for="dot-2">
                <span class="dot two"></span>
                <span class="gender">Female</span>
              </label>
              <label for="dot-3">
                <span class="dot three"></span>
                <span class="gender">Prefer not to say</span>
              </label>
            </div>
          </div>
          <div class="button">
            <input type="submit" value="Continue" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
