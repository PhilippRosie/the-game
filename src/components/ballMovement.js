export function BallMovement(ctx, ballObject) {
  let data = new Ball(ballObject.x, ballObject.y, ballObject.rad);
  data.draw(ctx);
  ballObject.x += ballObject.dx;
  ballObject.y += ballObject.dy;
}

class Ball {
  constructor(x, y, rad) {
    this.x = x;
    this.y = y;
    this.rad = rad;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.arc(this.x, this.y, this.rad, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.fill();
    ctx.stroke();
  }
}
