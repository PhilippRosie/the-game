import React from "react";
import "../styles/game.css";
import Snake from "../components/snake";

export default function game() {
  return (
    <div className="snake-container">
      <Snake />{" "}
    </div>
  );
}
