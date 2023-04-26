import React from "react";
import { index, select } from "d3";
import "../styles/game.css";

import snake from "../img/Snake.jpg";

// create N points such that adjecent nodes are L distance apart
const createPoints = (N, L) => {
  let x = 100;
  let y = 0;
  const points = [];
  for (let i = 0; i < N; i += 1) {
    points.push({ x, y });
    y += L;
  }
  return points;
};

const satisfyLinkConstraints = (points, L) => {
  // head is unchanged
  const newPoints = [points[0]];
  for (let i = 1; i < points.length; i += 1) {
    // satisfy distance Constraint
    const a = newPoints[i - 1];
    const b = points[i];
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    const distance = Math.hypot(dx, dy);
    const vba = { x: dx / distance, y: dy / distance };
    const x = a.x - L * vba.x;
    const y = a.y - L * vba.y;
    newPoints.push({ x, y });
  }
  return newPoints;
};

class Main extends React.Component {
  componentDidMount() {
    this.N = 100; // points (how many divs)
    this.L = 10; // gap between divs
    this.points = createPoints(this.N, this.L);
    this.draw();
    this.headAngle = -Math.PI / 2;
    document.addEventListener("mousedown", (e) => {
      this.down = true;
      this.updateHead(e.clientX, e.clientY);
    });
    document.addEventListener("mousemove", (e) => {
      if (!this.down) return;
      this.updateHead(e.clientX, e.clientY);
    });
    document.addEventListener("mouseup", (e) => {
      this.down = false;
    });

    setInterval(() => {
      this.moveUp();
    }, 15); // how fast the snake move

    document.addEventListener("keydown", (e) => {
      const k = e.key;
      if (k === "ArrowLeft") {
        this.headAngle -= 0.05;
      }
      if (k === "ArrowRight") {
        this.headAngle += 0.05;
      }
    });
  }

  moveUp() {
    const [head, ...tail] = this.points;
    const del = 2;
    const x = head.x + del * Math.cos(this.headAngle);
    const y = head.y + del * Math.sin(this.headAngle);
    this.updateHead(x, y);
  }

  updateHead(x, y) {
    const [, ...tail] = this.points;
    this.points = [{ x, y }, ...tail];
    this.points = satisfyLinkConstraints(this.points, this.L);
    this.draw();
  }

  draw() {
    const node = select(this.node);
    node.style("position", "relative");
    const updateSel = node.selectAll("div").data(this.points);
    const headWidth = 30;
    const tailWidth = 10;
    const noOfChunksForHead = 5;
    const width = (index) => {
      if (index < noOfChunksForHead) {
        const peakWidth = 10;
        const bigWidth = 35;
        const f = index / (noOfChunksForHead - 1);
        return peakWidth + f * (bigWidth - peakWidth);
      }
      return headWidth + (tailWidth - headWidth) * (index / (this.N - 1));
    };
    updateSel
      .enter()
      .append("div")
      .style("position", "absolute")
      .style("background", `url(${snake})`)

      .style("border-radius", "50%")
      .style("width", (d, i) => `${width(i)}px`)
      .style("height", (d, i) => `${width(i)}px`)
      .merge(updateSel)
      .style("left", (d, i) => `${d.x - width(i) / 2}px`)
      .style("top", (d, i) => `${d.y - width(i) / 2}px`);
  }

  render() {
    return <div ref={(node) => (this.node = node)}></div>;
  }
}
export default Main;
