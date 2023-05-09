export default function Brick(level, bricks, canvas, brickObject) {
  brickObject.width = canvas.width / 10 - 1; // brick width in canvas
  let newBricks = [];
  if (!bricks) {
    return [];
  }
  //if all levels are filled => return
  if (bricks.length >= 5 * level) {
    return;
  }

  //brick formation
  for (let i = 0; i < 20 * level; i++) {
    let newBrick = new oneBrick(
      brickObject.x,
      brickObject.y,
      brickObject.width - 5, // space between
      brickObject.height - 5, // space between
      brickObject.colors
    );
    newBricks.push(newBrick);

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
    this.x = x + 2.5; // center the bricks
    this.y = y;
    this.width = w;
    this.height = h;
    this.colors = c;
    this.broken = false;
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillstyle = this.broken ? "red" : this.colors[1];
    ctx.strokeStyle = this.broken ? "red" : "#0f0f0f";
    ctx.fillStyle = this.broken ? "red" : this.colors[1];
    ctx.shadowBlur = 0;
    ctx.shadowColor = "black";
    ctx.strokeRect(this.x, this.y, this.width, this.height);
    ctx.fill();
  }
}
