import React from "react";
import { Link } from "react-router-dom";
import Home from "../../../component/home";
import "./index.css";
import Button from "../../../component/button";

const WellcomePage = () => {
  return (
    <Home>
      <div className="money"></div>
      <div className="rectangle">
        <div className="mesh"></div>
      </div>
      <h1>Hello!</h1>
      <p>Welcome to Bank App</p>

      <div className="buttons">
        <Link className="linkstyle" to="/signup">
          <Button>Sign Up</Button>
        </Link>

        <Link className="linkstyle" to="/signin">
          <Button type="button-white">Sign In</Button>
        </Link>
      </div>
    </Home>
  );
};

export default WellcomePage;
