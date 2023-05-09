import React, { useRef, useEffect } from "react";
import { BallMovement } from "../components/ballMovement";
import "../styles/gameBoard.css";
import BoardCollision from "../components/boardCollision";

export default function GameBoard() {
  const canvasRef = useRef(null);

  let ballObject = {
    x: 20,
    y: 200,
    rad: 20,
    dx: 2,
    dy: 2,
    speed: 10,
  };
  let brickobject = {
    x: 0.5,
    y: 50,
    height: 20,
    density: 2,
    colors: ["red", "yellow"],
  };
  let player = {
    name: "",
    lives: 5,
    score: 0,
    level: 1,
  };

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
