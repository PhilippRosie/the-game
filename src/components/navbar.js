import { Link } from "react-router-dom";
import React from "react";
import "../styles/navbar.css";
import "../pages/Login";
import "../pages/Logout";
import "../pages/game";
export default function Navbar() {
  return (
    <header>
      <h3 className="logo">OUR GAME</h3>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/logout">Logout</Link>
        <Link to="/game">Game</Link>
      </nav>
    </header>
  );
}
