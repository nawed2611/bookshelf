import React, { useState } from "react";
import Logo from "../Assets/Logo.png";
import "../Styles/Home-Style.css";
import useAuth from "../firebaseConfig";

export default function () {
  let [status, setStatus] = useState();

  let { google } = useAuth(setStatus);

  return (
    <div className="Home">
      <div className="About">
        <div className="AboutDiv">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="SignInDiv">
          <div className="IntroDiv">
            <h2>Welcome to BookShelf</h2>
            <h4>A Place for all your study needs</h4>
          </div>
          <div className="SignIn">
            <h3>Login to Continue</h3>
            <button onClick={async () => google()}>Continue With Google</button>
            <p>{status}</p>
          </div>
        </div>

      </div>
    </div>
  );
}
