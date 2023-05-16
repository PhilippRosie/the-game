import React, { useState, useEffect } from "react";
import "../styles/gameBuild.css";

const GameBuild = () => {
  const [heads, setHeads] = useState([]);
  const [startGame, setStartGame] = useState(false);
  const [showStartBtn, setShowStartBtn] = useState(true);
  const [clickedHeads, setClickedHeads] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);
  const [gameOver, setGameOver] = useState(false);

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
    setStartGame(true);
    setShowStartBtn(false);
  };

  useEffect(() => {
    let countDown;

    if (startGame) {
      timeLeft > 0
        ? (countDown = setInterval(() => {
            setTimeLeft((timeBefore) => timeBefore - 1);
          }, 1000))
        : setGameOver(true);
    }

    return () => {
      clearInterval(countDown);
    };
  }, [timeLeft, startGame]);

  const reloadGame = () => {
    setHeads([]);
    setClickedHeads(0);
    setTimeLeft(20);
    setGameOver(false);
    makeHead();
    setShowStartBtn(false);
  };

  return (
    <div className="gameContainer">
      <div>
        <div className="gameHeading">
          <p className="smashHeads">Smashed Trumps:{clickedHeads} </p>
          <p className="timerContainer">
            Time Left: <span id="time">{timeLeft}</span>
          </p>
        </div>

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
      {showStartBtn && (
        <div className="startGameContainer overlay">
          <button className="startGameBtn " onClick={startBtn}>
            Start Game
          </button>
        </div>
      )}

      {gameOver && (
        <div className="resultGameOverContainer overlay">
          <h3 className="gameOverText"> Game Over! </h3>
          <p className="score">Score: {clickedHeads}</p>
          <button onClick={reloadGame} className="reloadBtn">
            Let's do it AGAIN!
          </button>
        </div>
      )}
    </div>
  );
};

export default GameBuild;
