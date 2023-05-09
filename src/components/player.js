export default (ctx, canvas, playerProps) => {
  class Player {
    constructor(x) {
      this.x = x;
      this.y = canvas.height - 30;
      this.height = 20;
      this.width = playerProps.width;
    }

    move() {
      ctx.beginPath();
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.fillStyle = "red";
      ctx.strokeStyle = "white";
      ctx.strokeRect(this.x, this.y, this.width, this.height);
      ctx.fill();
    }
  }
  let player = new Player(playerProps.x);
  player.move();
  if (playerProps.x <= 0) {
    playerProps.x = 0;
  } else if (playerProps.x + playerProps.width >= canvas.width) {
    playerProps.x = canvas.width - playerProps.width;
  }
};
