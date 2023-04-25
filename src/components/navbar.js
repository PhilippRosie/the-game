import { Link } from "react-router-dom";
import React from "react";
import "../styles/navbar.css";
import "../pages/profile";
import CreateAcc from "../pages/createAcc";
import Login from "../pages/login";

import "../pages/game";
export default function Navbar() {
  return (
    <header>
      <h3 className="logo">The GAME.</h3>
      <nav>
        <div className="main-menu">
          <Link to="/">Home</Link>
          <Link to="/game">Game</Link>
        </div>
        <div className="user-menu">
          <CreateAcc />
          <Login />
        </div>
      </nav>
    </header>
  );
}
