import React, { useEffect } from "react";
import "../styles/game.css";
import videoBg from "../assets/game-background.mp4";

export default function Game() {
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);
  return (
    <div className="game-container">
      <video src={videoBg} autoPlay loop muted />

      <div className="canvas-box">
        <canvas width={950} height={950} id="mycanvas"></canvas>
      </div>
    </div>
  );
}
