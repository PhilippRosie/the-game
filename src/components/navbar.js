import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../styles/navbar.css";
import "../pages/profile";
import CreateAcc from "./createAcc";
import Login from "./login";

import "../pages/game";

export default function Navbar() {
  const [currentForm, setCurrentForm] = useState("login");

  const toogleForm = (forName) => {
    setCurrentForm(forName);
  };

  return (
    <header>
      <h3 className="logo">The GAME.</h3>
      <nav>
        <div className="main-menu">
          <Link to="/">Home</Link>
          <Link to="/game">Game</Link>
        </div>
        <div className="user-menu">
          {currentForm === "login" ? (
            <Login onFormSwitch={toogleForm} />
          ) : (
            <CreateAcc onFormSwitch={toogleForm} />
          )}
        </div>
      </nav>
    </header>
  );
}
