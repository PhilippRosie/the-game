import { Link } from "react-router-dom";
import React from "react";
import "../styles/navbar.css";
import "../pages/profile";
import "../pages/game";
export default function Navbar() {
  return (
    <header>
      <h3 className="logo">The GAME</h3>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/game">Game</Link>
      </nav>
    </header>
  );
}
