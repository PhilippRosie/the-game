import React, { useRef, useEffect } from "react";

let x = 0;
export default function gameBoard() {
  const canvasRef = useRef(null);
  const ctx = canvas.getContext("2d");

  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.arc(x, 75, 50, 0, 2);
      ctx.stroke();
      requestAnimationFrame(render);
    };
  }, []);

  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="canvas"
      height="500px"
      width={window - innerWidth - 20}
    />
  );
}
