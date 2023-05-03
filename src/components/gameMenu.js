import React from "react";
import "../styles/gameMenu.css";

const Menu = ({ onRouteChange }) => {
  return (
    <div className="game__menu">
      <div>
        <input
          onClick={onRouteChange}
          className="start__button"
          type="button"
          value="start game"
        />
      </div>
    </div>
  );
};

export default Menu;
