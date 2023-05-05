import "../styles/snake.css";

const Snake = ({ snakeDots }) => {
  return (
    <div>
      {snakeDots.map((dot, i) => {
        const style = {
          left: `${dot[0]}%`,
          top: `${dot[1]}%`,
          width: "34px",
          height: "34px",
        };
        const isHead = i === snakeDots.length - 1;
        const className = `snake${isHead ? " head" : ""}`;
        return <div className={className} key={i} style={style} />;
      })}
    </div>
  );
};

export default Snake;
