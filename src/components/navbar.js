import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../styles/navbar.css";
import "../pages/profile";
import CreateAcc from "./createAcc";
import Login from "./login";
import { logout } from "../helpers";

import "../pages/game";

export default function Navbar() {
  const [currentForm, setCurrentForm] = useState("login");
  const [auth, setAuth] = useState(localStorage.getItem("user") !== null);

  const toogleForm = (forName) => {
    setCurrentForm(forName);
  };

  const handleLogout = () => {
    logout();
    setAuth(false);
  };

  return (
    <header>
      <h3 className="logo">The GAME.</h3>
      <nav>
        <div className="main-menu">
          <Link to="/">Home</Link>
          {auth && <Link to="/game">Game</Link>}
          {auth && <Link to="/userPage">User Page</Link>}
        </div>
        <div className="user-menu">
          {auth ? (
            <button onClick={handleLogout} className="logoutBtn">
              Logout
            </button>
          ) : currentForm === "login" ? (
            <Login onFormSwitch={toogleForm} setAuth={auth} />
          ) : (
            <CreateAcc onFormSwitch={toogleForm} setAuth={auth} />
          )}
        </div>
      </nav>
    </header>
  );
}
