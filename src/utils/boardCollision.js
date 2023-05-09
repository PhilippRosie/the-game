export default function Collisons(ballObject, canvas) {
  if (
    ballObject.y - ballObject.rad < 0 ||
    ballObject.y + ballObject.rad > canvas.height
  ) {
    ballObject.dy *= -1;
  }

  if (
    ballObject.x + ballObject.rad >= canvas.width ||
    ballObject.x - ballObject.rad <= 0
  ) {
    ballObject.dx *= -1;
  }
}
