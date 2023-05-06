import { useRef, useEffect, useState } from "react";
import Sprite from "../img/ACharDown.png";

export default function Player() {
  useEffect(() => {
    const playerImage = new Image();
    playerImage.src = Sprite;

    playerImage.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(playerImage);

      setImageLoaded(true);
    };
  }, []);
}
