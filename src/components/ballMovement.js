export function BallMovement(ctx, ballobject) {
  let data = new ballobject(ballobject.x, ballobject.y, ballobject.rad);
  data.draw(ctx);
  ballobject.x += ballobject.dx;
  ballobject.y += ballobject.dy;
}

class Ball {
  constructor(x, y, rad) {
    this.x = x;
    this.y = y;
    this.rad = rad;
  }
}
