import React from "react";
import "../styles/game.css";

export default function game() {
  return (
    <div className="canvas-box">
      <canvas width={950} height={950} id="mycanvas"></canvas>
    </div>
  );
}
