import React from "react";
import "../styles/game.css";

import Snake from "../components/snake";
import Food from "../components/Food";

import Menu from "../components/gameMenu";

class Game extends React.Component {
  render() {
    return (
      <div>
        <Snake />,<Food />,<Menu />
      </div>
    );
  }
}

export default Game;
