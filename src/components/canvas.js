import { useRef, useEffect } from "react";
import "../styles/canvas.css";

const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#f00";
    ctx.font = "30px Arial";
    ctx.fillStyle = "#00f";
    ctx.fillText("Hello, World!", 0, 100);
  }, []);
  return (
    <div className="canvas-container">
      <canvas
        className="canvas"
        width={window.innerWidth}
        height={window.innerHeight}
        ref={canvasRef}
      ></canvas>
    </div>
  );
};
export default Canvas;
