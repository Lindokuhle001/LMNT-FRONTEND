import React from "react";

function Products() {
  return (
    <div>
      <form action="#">
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
          <option value="India">all</option>
          <option value="Sri Lanka">18-25</option>
          <option value="Australia">20-25</option>
          <option value="Australia">20-25</option>
        </select>
        <input type="range"></input>
      </form>
    </div>
  );
}

export default Products;
