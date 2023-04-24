import React from "react";
import "../styles/game.css";

export default function game() {
  return (
    <div className="canvas-box">
      <canvas width={1000} height={1000} id="mycanvas"></canvas>
    </div>
  );
}
