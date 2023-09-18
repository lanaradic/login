import React, { useState } from "react";
import "../components/styles/signUp.scss";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [active, setActive] = useState("Home");
  const handleLinkClick = (link) => {
    setActive(link);
    console.log(active);
  };
  return (
    <div className="signup-wrapper">
      <h1>Wellcome</h1>
      <h3>Get on board</h3>
      <input type="email" placeholder="e-mail"></input>
      <input type="password" placeholder="password"></input>
      <button>
        <h4>Sign up</h4>
      </button>
      <Link onClick={() => handleLinkClick("Iam already a member")} to="/LogIn">
        <div
          className={`signUp-link-wrapper${
            active === "I am already a member" ? "active" : ""
          }`}
        >
          <p> I am already a member</p>
        </div>
      </Link>
    </div>
  );
};

export default SignUp;
