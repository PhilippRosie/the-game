import React, { useRef, useEffect } from "react";
import { BallMovement } from "../components/ballMovement";
import data from "../components/gameData";
import "../styles/gameBoard.css";
import BoardCollision from "../components/boardCollision";

let { ballObject } = data;

export default function GameBoard() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      BallMovement(ctx, ballObject);

      BoardCollision(ballObject, canvas);

      requestAnimationFrame(render);
    };
    render();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="canvas"
      height="500px"
      width={window.innerWidth}
    />
  );
}
