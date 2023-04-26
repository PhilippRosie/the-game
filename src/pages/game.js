import React from "react";
import { index, select } from "d3";
import "../styles/game.css";
import Snake from "../components/snake";

export default function game() {
  return (
    <canvas width={1000} height={1000}>
      <Snake />
    </canvas>
  );
}
