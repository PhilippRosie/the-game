import React, { useState } from "react";
import ReusableModal from "../components/ReusableModal";
import "../styles/login.css";

const Login = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <button className="loginBtn" onClick={() => setShowModal(true)}>
        Login
      </button>
      <ReusableModal show={showModal} onClose={() => setShowModal(false)}>
        <h3>Thihs is a real modal ... Heck Yeah!</h3>
        <p>This Is SECOND Modal</p>
      </ReusableModal>
    </div>
  );
};

export default Login;
