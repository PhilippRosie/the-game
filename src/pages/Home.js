import React, { useState } from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";
import ReusableModal from "../components/ReusableModal";
import Login from "../components/login";
import { authenticate } from "../helpers";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const auth = authenticate();

  return (
    <div className="home-content">
      <button className="Game-btn" onClick={() => setShowModal(true)}>
        {auth ? (
          <Link to="/game">Let's PLAY!</Link>
        ) : (
          <Link to="/login">Login to PLAY!</Link>
        )}
      </button>

      <ReusableModal show={showModal} onClose={() => setShowModal(false)}>
        <Login />
      </ReusableModal>
    </div>
  );
}
