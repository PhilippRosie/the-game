import { useRef, useEffect, useState } from "react";
import "../styles/canvas.css";
import world from "../img/world.png";

const Canvas = () => {
  const canvasRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  let pos = { x: -200, y: -280 };
  const keys = {
    w: {
      pressed: false,
    },
    s: {
      pressed: false,
    },
    a: {
      pressed: false,
    },
    d: {
      pressed: false,
    },
  };

  useEffect(() => {}, []);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const backgroundImage = new Image();
    backgroundImage.src = world;

    const movement = 10;

    window.addEventListener("keydown", (e) => {
      console.log(e.key);
      switch (e.key) {
        case "w":
          keys.w.pressed = true;
          pos.y += movement;
          break;
        case "s":
          keys.s.pressed = true;
          pos.y -= movement;
          break;
        case "a":
          keys.a.pressed = true;
          pos.x += movement;
          break;
        case "d":
          keys.d.pressed = true;
          pos.x -= movement;
          break;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        backgroundImage,
        pos.x,
        pos.y,
        canvas.width * 8,
        canvas.height * 8
      );
    });

    backgroundImage.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        backgroundImage,
        pos.x,
        pos.y,
        canvas.width * 8,
        canvas.height * 8
      );

      setImageLoaded(true);
    };
  }, []);

  return (
    <div className="canvas-container">
      {!imageLoaded && <div>Loading image...</div>}
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
