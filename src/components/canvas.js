import { useRef, useEffect, useState } from "react";
import "../styles/canvas.css";
import world from "../img/world.png";
import playerSprite from "../img/ACharDown.png";
import "../styles/player.css";

const Canvas = () => {
  const canvasRef = useRef(null);
  const [playerImage, setPlayerImage] = useState("");
  const [bgImage, setBgImage] = useState("");
  const [pos, updatePos] = useState({ x: -200, y: -280 });
  useEffect(() => {
    const playerImage = new Image();
    playerImage.src = playerSprite;
    playerImage.onload = () => {
      setPlayerImage(playerImage);
    };
  }, []);

  useEffect(() => {
    const bgImage = new Image();
    bgImage.src = world;
    bgImage.onload = () => {
      setBgImage(bgImage);
    };
  }, []);

  useEffect(() => {
    if (bgImage && playerImage) {
      console.log(pos);
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(bgImage, pos.x, pos.y, canvas.width * 8, canvas.height * 8);
      ctx.drawImage(
        playerImage,
        canvas.width / 2 - playerImage.width / 2,
        canvas.height / 2 - playerImage.height / 2
      );
    }
  }, [bgImage, playerImage, pos]);

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      let movement = 5;
      console.log(e.key);
      switch (e.key) {
        case "w":
          updatePos((prevPos) => ({ ...prevPos, y: prevPos.y + movement }));
          break;
        case "s":
          updatePos((prevPos) => ({ ...prevPos, y: prevPos.y - movement }));
          break;
        case "a":
          updatePos((prevPos) => ({ ...prevPos, x: prevPos.x + movement }));
          break;
        case "d":
          updatePos((prevPos) => ({ ...prevPos, x: prevPos.x - movement }));
          break;
        default:
          break;
      }
    });
    window.removeEventListener("keydown", (e) => {
      let movement = 5;
    });
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
