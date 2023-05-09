export default function Brick(level, bricks, canvas, brickObject) {
  brickObject.width = canvas.width / 5;
  let newBricks = [];
  if (!bricks) {
    return [];
  }
  //if all levels are filled => return
  if (bricks.length >= 5 * level) {
    return;
  }

  //brick formation
  for (let i = 0; i < 5 * level; i++) {
    let newBrick = new oneBrick(
      brickObject.x + brickObject.width,
      brickObject.y,
      brickObject.width,
      brickObject.height,
      brickObject.colors
    );
    newBricks.push(newBrick);
    // draw brick
    brickObject.x += brickObject.width + 1;
    if (brickObject.x + brickObject.width >= canvas.width) {
      brickObject.x = 0.5;
      brickObject.y += brickObject.height + 1;
    }
  }
  return newBricks;
}

class oneBrick {
  constructor(x, y, w, h, c) {
    this.x = x - w;
    this.y = y;
    this.width = w;
    this.height = h;
    this.colors = c;
    this.broke = false;
  }
  draw(ctx) {}
}
