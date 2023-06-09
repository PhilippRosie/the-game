import React, { useState, useEffect, useCallback } from "react";
import "../styles/gameBuild.css";

import baam from "../images/BAAM.png";
import missed from "../images/MISSED.png";

const GameBuild = () => {
  const [heads, setHeads] = useState([]);
  const [startGame, setStartGame] = useState(false);
  const [showStartBtn, setShowStartBtn] = useState(true);
  const [clickedHeads, setClickedHeads] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);
  const [gameOver, setGameOver] = useState(false);

  const [showBaam, setShowBaam] = useState(false);
  const [showMissed, setShowMissed] = useState(false);

  const makeHead = useCallback(() => {
    const gameHead = {
      id: heads.length + 1,
      top: Math.random() * 400,
      left: Math.random() * 700,
    };
    setHeads([gameHead]);
  }, [heads.length]);

  const removeHead = (id) => {
    setHeads(heads.filter((head) => head.id !== id));
    setClickedHeads(clickedHeads + 1);
    setTimeLeft((addedTime) => addedTime + 1);
    makeHead();
  };

  const handleBaam = () => {
    setShowBaam(true);

    setTimeout(() => {
      setShowBaam(false);
    }, 500);
  };

  const handleMissed = () => {
    setShowMissed(true);

    setTimeout(() => {
      setShowMissed(false);
    }, 500);
  };

  const removeTime = () => {
    setTimeLeft((decTime) => decTime - 0.5);
  };

  const startBtn = () => {
    makeHead();
    setStartGame(true);
    setShowStartBtn(false);
  };

  useEffect(() => {
    let countDown;
    let changeHeadPosition;

    if (startGame) {
      timeLeft > 0
        ? (countDown = setInterval(() => {
            setTimeLeft((timeBefore) => timeBefore - 1);
          }, 1000))
        : setGameOver(true);

      changeHeadPosition = setInterval(() => {
        makeHead();
      }, 1000);
    }

    return () => {
      clearInterval(countDown);
      clearInterval(changeHeadPosition);
    };
  }, [timeLeft, startGame, makeHead]);

  const reloadGame = () => {
    setHeads([]);
    setClickedHeads(0);
    setTimeLeft(20);
    setGameOver(false);
    makeHead();
    setShowStartBtn(false);
  };

  return (
    <div
      className="gameContainer"
      onClick={() => {
        removeTime();
      }}
    >
      <div>
        <div className="gameHeading">
          <p className="smashHeads">Smashed Trumps:{clickedHeads} </p>
          <p className="timerContainer">
            Time Left: <span id="time">{timeLeft}</span>
          </p>
        </div>

        <div
          className="gameBoard"
          onClick={(e) => {
            if (e.target.classList.contains("gameBoard")) {
              handleMissed();
            }
          }}
        >
          {heads.map((head) => (
            <div
              key={head.id}
              onClick={() => {
                removeHead(head.id);
                handleBaam();
              }}
              className="politician"
              style={{ left: head.left + "700px", top: head.top + "700px" }}
            >
              {showBaam && <img className="baamImage" src={baam} alt="BAAM" />}
              {showMissed && (
                <img className="missedImage" src={missed} alt="MISSED" />
              )}
            </div>
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
