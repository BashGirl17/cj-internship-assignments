import React from "react";
import "./Navbar.css";
export default function Navbar() {
  return (
    <nav>
      <h3>Moviera</h3>
      <ul>
        <li>
          <a href="#"> Explore</a>
        </li>
        <li>
          <a href="#"> Recommend</a>
        </li>
        <li>
          <a href="#"> Profile</a>
        </li>

        <li>
          <button onclick="#">SignUp</button>
        </li>
        <li>
          <button onclick="#">SignIn</button>
        </li>
      </ul>
    </nav>
  );
}
