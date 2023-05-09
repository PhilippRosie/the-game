import React, { useState } from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";
import ReusableModal from "../components/ReusableModal";
import Login from "../components/login";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="home-content">
      <button className="Game-btn" onClick={() => setShowModal(true)}>
        <Link to="/login">Login to PLAY!</Link>
      </button>

      <ReusableModal show={showModal} onClose={() => setShowModal(false)}>
        <Login />
      </ReusableModal>
    </div>
  );
}
