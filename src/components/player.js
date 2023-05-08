import React, { useState, useEffect } from "react";
import "../styles/player.css";
import playerImg from "../img/ACharDown.png";

const Player = (props) => {
  const [posX, setposX] = useState(370);
  const [posY, setposY] = useState(120);

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.keyCode) {
        case 37:
          setposX((x) => x - 3);
          break;
        case 38:
          setposY((y) => y - 3);
          break;
        case 39:
          setposX((x) => x + 3);
          break;
        case 40:
          setposY((y) => y + 3);
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="player-div" style={{ left: posX, top: posY }}>
      <img src={playerImg} alt="player image" />
    </div>
  );
};
export default Player;
