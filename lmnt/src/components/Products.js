import React from "react";

function Products() {
  return (
    <div>
      <form action="#">
        <label for="userGender">your gender</label>
        <select name="gender" id="gender">
          <option value="India">male</option>
          <option value="Sri Lanka">female</option>
          <option value="Australia">other</option>
        </select>
        <label for="perferedGender">your prefered ender</label>
        <select name="perferedGender" id="perferedGender">
          <option value="India">male</option>
          <option value="Sri Lanka">female</option>
          <option value="Australia">other</option>
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
