import React from "react";
import "../styles/game.css";
import Canvas from "../components/canvas";
import { color } from "framer-motion";

export default function game() {
  return (
    <div>
      <Canvas></Canvas>
      <div className="Instructions">
        <p>Move with W,S,A,D</p>
      </div>
    </div>
  );
}
