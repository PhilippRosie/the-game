export default {
  ballobject: {
    x: 20,
    y: 200,
    dx: 5,
    dy: 5,
    radius: 10,
    speed: 10,
  },
  brickobject: {
    x: 0.5,
    y: 50,
    width: 800 / 10 - 1,
    height: 20,
    density: 2,
    colors: ["black", "red"],
  },

  Player: {
    name: "",
    lives: 5,
    score: 0,
    level: 1,
  },
};
