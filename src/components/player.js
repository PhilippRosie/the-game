import React from "react";

const Player = ({ playerImage, canvasRef }) => {
  const playerPosition = { x: 0, y: 0 };

  return (
    <div
      style={{
        position: "absolute",
        top: playerPosition.y,
        left: playerPosition.x,
        width: playerImage.width,
        height: playerImage.height,
      }}
    >
      <img src={playerImage.src} alt="Player" />
    </div>
  );
};

export default Player;
