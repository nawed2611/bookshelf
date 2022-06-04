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
        <img src={Logo} alt="Logo" />
        <button onClick={async () => google()}>Sign In With Google</button>
        <p>{status}</p>
      </div>
    </div>
  );
}
