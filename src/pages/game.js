import React from "react";
import { select } from "d3";
import "../styles/game.css";

// create N points such that adjecent nodes are L distance apart
const createPoints = (n, L) => {
  let x = 100;
  let y = 0;
  const points = [];
  for (let i = 0; i < n; i += 1) {
    points.push({ x, y });
    y += L;
  }
  return points;
};

class Main extends React.Component {
  componentDidMount() {
    this.N = 20;
    this.L = 30;
    this.points = createPoints(this.N, this.L);
    this.draw();
    this.down = false;
  }

  draw() {
    const width = 20;
    const node = select(this.node);
    node.style("position", "relative");
    const updateSel = node.selectAll("div").data(this.points);
    updateSel
      .enter()
      .append("div")
      .style("position", "absolute")
      .style("background", "white")
      .style("width", `${width}px`)
      .style("height", `${width}px`)
      .merge(updateSel)
      .style("left", (d) => `${d.x}px`)
      .style("top", (d) => `${d.y}px`);
  }

  render() {
    return <div ref={(node) => (this.node = node)}></div>;
  }
}
export default Main;
