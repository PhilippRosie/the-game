import React, { useState } from "react";
import "../styles/gameBuild.css";

const GameBuild = () => {
  const [heads, setHeads] = useState([]);
  const [clickedHeads, setClickedHeads] = useState(0);

  const makeHead = () => {
    const gameHead = {
      id: heads.length + 1,
      top: Math.random() * 500,
      left: Math.random() * 500,
    };
    setHeads([gameHead]);
  };

  const removeHead = (id) => {
    setHeads(heads.filter((head) => head.id !== id));
    setClickedHeads(clickedHeads + 1);
    makeHead();
  };

  const startBtn = () => {
    makeHead();
  };

  return (
    <div className="gameContainer">
      <div>
        <p className="smashHeads">Smashed Trumps:{clickedHeads} </p>
        <div className="gameBoard">
          {heads.map((head) => (
            <div
              key={head.id}
              onClick={() => removeHead(head.id)}
              className="politician"
              style={{ left: head.left + "700px", top: head.top + "700px" }}
            ></div>
          ))}
        </div>
      </div>
      <button className="startGameBtn" onClick={startBtn}>
        Start Game
      </button>
    </div>
  );
};
export default GameBuild;
