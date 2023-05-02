import React, { useState } from "react";
import ReusableModal from "./ReusableModal";
import "../styles/login.css";

const Login = (props) => {
  const [showModal, setShowModal] = useState(false);

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div>
      <button className="loginBtn" onClick={() => setShowModal(true)}>
        Login
      </button>
      <div className="auth-form-container">
        <ReusableModal show={showModal} onClose={() => setShowModal(false)}>
          <form className="form-container-login" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <label htmlFor="email" id="label" className="label">
              Your Email:
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              className="input"
              required
              placeholder="youremail@gmail.com"
            />
            <label htmlFor="password" id="label" className="label">
              Choose a Password:
            </label>
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              id="input"
              className="input"
              required
              placeholder="*********"
            />
            <button
              disabled={!email || !pass}
              type="submit"
              className="submitBtn"
            >
              Login
            </button>
          </form>
          <button
            className="reg-login-btn"
            type="regBtn"
            onClick={() => props.onFormSwitch("createacc")}
          >
            Don't have an account? Register here!
          </button>
        </ReusableModal>
      </div>
    </div>
  );
};

export default Login;
