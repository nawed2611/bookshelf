import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Home-Style.css";

export default function () {
  return (
    <div className="Navbar">
      <Link to="/">
        <h1>BookShelf</h1>
      </Link>
      <ul className="NavLinks">
        <a href="/">
          <li>GitHub</li>
        </a>
        <Link to="/book">
          <li>Feed</li>
        </Link>
        <a href="/">
          <li>Profile</li>
        </a>
      </ul>
    </div>
  );
}
