import React, { useRef, useEffect } from "react";
import { BallMovement } from "../components/ballMovement";
import "../styles/gameBoard.css";
import BoardCollision from "../utils/boardCollision";
import Player from "../components/player";

let bricks = [];

export default function GameBoard() {
  const canvasRef = useRef(null);

  let ballObject = {
    x: 20,
    y: 200,
    rad: 10,
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

  let playerProps = {
    height: 20,
    width: 100,
    x: 100,
    color: "blue",
  };

  // render to canvas!
  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      // Bricks

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      //ball movement!
      BallMovement(ctx, ballObject);

      // ball and wall collisions
      BoardCollision(ballObject, canvas);
      // player platfrom and movement on x axle!
      Player(ctx, canvas, playerProps);

      requestAnimationFrame(render);
    };
    render();
  });
  return (
    <canvas
      ref={canvasRef}
      onMouseMove={(event) =>
        (playerProps.x = event.clientX - playerProps.width / 2)
      }
      id="canvas"
      height="500px"
      width={window.innerWidth}
    />
  );
}
