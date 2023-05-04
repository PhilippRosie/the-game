import snakeTexture from "../img/Snake.jpg";
import "../styles/snake.css";

const Snake = ({ snakeDots }) => {
  const headWidth = 40; // define head width
  const tailWidth = 30; // define tail width
  const widthDiff = (headWidth - tailWidth) / (snakeDots.length - 1); // calculate the width difference between each segment
  return (
    <div>
      {snakeDots.map((dot, i) => {
        const width = tailWidth + widthDiff * i; // calculate the width of each segment based on its index
        const style = {
          left: `${dot[0]}%`,
          top: `${(dot[1], dot[1])}%`,
          width: `${width}px`, // set the width of the segment
          height: `${width}px`, // set the height of the segment
        };
        const isHead = i === snakeDots.length - 1;
        const className = `snake${isHead ? " head" : ""}`;
        return <div className={className} key={i} style={style} />;
      })}
    </div>
  );
};

export default Snake;
