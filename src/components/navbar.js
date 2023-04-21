import { Link } from "react-router-dom"; // Link instead of a
import { useRef } from "react"; // add a ref attribute to an element to access it directly.

import React from "react"; // react
import "../styles/navbar.css"; //navbar
import "../pages/Login";
import "../pages/Logout";
import "../pages/game";
export default function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    // toggle navbar

    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <h3 className="logo">OUR GAME</h3>
      <nav ref={navRef}>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/logout">Logout</Link>
        <Link to="/game">Game</Link>
      </nav>
    </header>
  );
}
