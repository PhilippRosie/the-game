import React, { Component } from "react";
import "../styles/game.css";
import Menu from "../components/gameMenu";
import Player from "../components/player";

const initialState = {
  route: "menu",
};

class Game extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  onRouteChange = () => {
    this.setState({
      route: "game",
    });
  };

  render() {
    const { route } = this.state;
    return (
      <div>
        {route === "menu" ? (
          <div>
            <Menu onRouteChange={this.onRouteChange} />
          </div>
        ) : (
          <div>
            <div className="game-board">
              <Player />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Game;
