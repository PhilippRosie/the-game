import React from "react";
import "../styles/game.css";

import Canvas from "../components/canvas";
import Snake from "../components/snake";

class Game extends React.Component {
  render() {
    return (
      <Canvas>
        <Snake />
      </Canvas>
    );
  }
}

export default Game;
