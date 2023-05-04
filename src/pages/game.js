import React from "react";
import "../styles/game.css";

import Snake from "../components/snake";
import Food from "../components/Food";
import Menu from "../components/gameMenu";

const getRandomFood = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  return [x, y];
};

const initialState = {
  food: getRandomFood(),
  direction: "RIGHT",
  speed: 50,
  route: "menu",
  snakeDots: [
    //Starting snakeDots
    [0, 0],
    [0, 2],
    [0, 4],
    [0, 6],
    [0, 8],
    [0, 10],
    [0, 12],
    [0, 14],
  ],
};

class Game extends React.Component {
  constructor() {
    super();
    this.state = initialState;
    this.animationFrameId = null;
  }

  componentDidMount() {
    this.animationFrameId = requestAnimationFrame(this.moveSnake);
    document.onkeydown = this.onKeyDown;
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.animationFrameId);
  }

  componentDidUpdate() {
    this.onSnakeOutOfBounds();
    this.onSnakeCollapsed();
    this.onSnakeEats();
  }

  onKeyDown = (e) => {
    e = e || window.event;
    switch (e.keyCode) {
      case 37:
        this.setState({ direction: "LEFT" });
        break;
      case 38:
        this.setState({ direction: "UP" });
        break;
      case 39:
        this.setState({ direction: "RIGHT" });
        break;
      case 40:
        this.setState({ direction: "DOWN" });
        break;
    }
  };

  moveSnake = () => {
    setTimeout(() => {
      let dots = [...this.state.snakeDots];
      let head = dots[dots.length - 1];
      if (this.state.route === "game") {
        switch (this.state.direction) {
          case "RIGHT":
            head = [head[0] + 1, head[1]];
            break;
          case "LEFT":
            head = [head[0] - 1, head[1]];
            break;
          case "DOWN":
            head = [head[0], head[1] + 2];
            break;
          case "UP":
            head = [head[0], head[1] - 2];
            break;
        }
        dots.push(head);
        dots.shift();
        this.setState({
          snakeDots: dots,
        });
      }
      this.animationFrameId = requestAnimationFrame(this.moveSnake);
    }, this.state.speed);
  };

  onSnakeOutOfBounds() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    if (this.state.route === "game") {
      if (head[0] >= 99 || head[1] >= 97 || head[0] < 0 || head[1] < 0) {
        this.gameOver();
      }
    }
  }

  onSnakeCollapsed() {
    let snake = [...this.state.snakeDots];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach((dot) => {
      if (head[0] == dot[0] && head[1] == dot[1]) {
        this.gameOver();
      }
    });
  }

  onSnakeEats() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    let food = this.state.food;
    let distance = 2; // collision area
    if (
      Math.abs(head[0] - food[0]) <= distance &&
      Math.abs(head[1] - food[1]) <= distance
    ) {
      this.setState({
        food: getRandomFood(),
      });
      this.increaseSnake();
      this.increaseSpeed();
    }
  }

  increaseSnake() {
    let newSnake = [...this.state.snakeDots];
    newSnake.unshift([]);
    this.setState({
      snakeDots: newSnake,
    });
  }

  increaseSpeed() {
    if (this.state.speed > 10) {
      this.setState({
        speed: this.state.speed - 2.5,
      });
    }
  }

  onRouteChange = () => {
    this.setState({
      route: "game",
    });
  };

  gameOver() {
    alert(`GAME OVER, your score is ${this.state.snakeDots.length - 8}`);
    this.setState(initialState);
  }

  render() {
    const { route, snakeDots, food } = this.state;
    return (
      <div>
        <div>
          <h1 className="game-Titel">The Game</h1>
        </div>
        {route === "menu" ? (
          <div>
            <Menu onRouteChange={this.onRouteChange} />
          </div>
        ) : (
          <div>
            <div className="game-area">
              <Snake snakeDots={snakeDots} />
              <Food dot={food} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Game;
