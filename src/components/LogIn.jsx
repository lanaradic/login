import React, { useState } from "react";
import "../components/styles/logIn.scss";
import { Link } from "react-router-dom";

const LogIn = () => {
  const [active, setActive] = useState("Home");
  const handleLinkClick = (link) => {
    setActive(link);
    console.log(active);
  };

  <Link onClick={() => handleLinkClick("_projects")} to="/Projects">
    <div
      className={`projects-wrapper ${active === "_projects" ? "active" : ""}`}
    >
      _projects
    </div>
  </Link>;

  return (
    <div className="login-wrapper">
      <h1>Wellcome back</h1>
      <h3>Log In</h3>
      <input type="email" placeholder="e-mail"></input>
      <input type="password" placeholder="password"></input>
      <button>
        <h4>Log in</h4>
      </button>

      <Link
        onClick={() => handleLinkClick("New here? Sign in instead")}
        to="/SignUp"
      >
        <div
          className={`signUp-link-wrapper${
            active === "New here? Sign in instead" ? "active" : ""
          }`}
        >
          <p> New here? Sign in instead</p>
        </div>
      </Link>
    </div>
  );
};

export default LogIn;
