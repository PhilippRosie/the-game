import React from "react"; //react
import "../styles/home.css"; //css
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-content">
      <button className="Game-btn">
        <Link to="/game"> Go to Game</Link>
      </button>
    </div>
  );
}
