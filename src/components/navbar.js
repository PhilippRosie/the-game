import { Link } from "react-router-dom";
import React from "react";
import "../styles/navbar.css";
import "../pages/login";
import "../pages/profile";
import "../pages/game";
export default function Navbar() {
  return (
    <header>
      <h3 className="logo">The GAME</h3>
      <nav>
        <div className="main-menu">
          <Link to="/">Home</Link>
          <Link to="/game">Game</Link>
        </div>
        <div className="user-menu">
          <Link to="/profile">Profile/Create Acc</Link>
          <Link to="/login">Login/Logout</Link>
        </div>
      </nav>
    </header>
  );
}
