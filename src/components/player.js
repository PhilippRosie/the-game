import React from "react";
import "../styles/player.css";
import playerImg from "../img/ACharDown.png";

const Player = (props) => {
  return (
    <div className="player-div">
      <img src={playerImg} alt="player image" />
    </div>
  );
};
export default Player;
