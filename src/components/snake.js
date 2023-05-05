import "../styles/snake.css";

<<<<<<< HEAD
<<<<<<< Updated upstream
import snake from "../img/Snake.jpg";

// create N points such that adjecent nodes are L distance apart
const createPoints = (N, L) => {
  //where snake start!
  let x = 500;
  let y = 500;
  const points = [];
  for (let i = 0; i < N; i += 1) {
    points.push({ x, y });
    y += L;
  }
  return points;
=======
const Snake = ({ snakeDots }) => {
  return (
    <div>
      {snakeDots.map((dot, i) => {
        const style = {
          left: `${dot[0]}%`, // sets the left position of the body part relative to its head
          top: `${dot[1]}%`, // sets the top position of the body part relative to its head
          width: "32px", // set the width of the body part
          height: "32px", // set the height of the body part
=======
const Snake = ({ snakeDots }) => {
  const headWidth = 40; // head width
  const tailWidth = 30; // tail width
  const widthDiff = (headWidth - tailWidth) / (snakeDots.length - 1); // width difference between each segment
  return (
    <div>
      {snakeDots.map((dot, i) => {
        const width = tailWidth + widthDiff * i; // width of each segment based on its index
        const style = {
          left: `${dot[0]}%`,
          top: `${(dot[1], dot[1])}%`,
          width: `${width}px`, // set the width of the segment
          height: `${width}px`, // set the height of the segment
>>>>>>> master
        };
        const isHead = i === snakeDots.length - 1;
        const className = `snake${isHead ? "head" : ""}`;
        return <div className={className} key={i} style={style} />;
      })}
    </div>
  );
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> master
};

export default Snake;
