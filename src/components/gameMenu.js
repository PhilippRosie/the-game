import React from "react";
import "../styles/gameMenu.css";

const Menu = ({ onRouteChange }) => {
  return (
    <div className="wrapper">
      <div>
        <input
          className="Start-game"
          onClick={onRouteChange}
          type="button"
          value="start game"
        />
      </div>
    </div>
  );
};

export default Menu;
