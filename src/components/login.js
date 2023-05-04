import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReusableModal from "./ReusableModal";
import axios from "axios";
import "../styles/login.css";

const Login = (props) => {
  const [showModal, setShowModal] = useState(false);

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();

  const checkUser = (users) => {
    const user = users.find(
      (user) => user.email === email && user.pass === pass
    );
    console.log(user);
    if (user.email === email && user.pass === pass) return user;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "" || pass === "") {
      alert("All Fields are required!");
    }

    const user = await axios
      .get("http://localhost:6001/users")
      .then((res) => checkUser(res.data, email, pass))
      .catch((error) => {
        console.log(error);
      });

    if (user.email === email && user.pass === pass) {
      navigate("/game");

      localStorage.setItem("user", JSON.stringify(user.id));
    }
    setEmail("");
    setPass("");
    setShowModal(false);
  };

  return (
    <div>
      <button className="loginBtn" onClick={() => setShowModal(true)}>
        Login
      </button>
      <div className="auth-form-container-login">
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
              type="submit"
              className="submitBtn-login"
              onClick={handleSubmit}
            >
              Login
            </button>
          </form>
          <button
            className="reg-createacc-btn"
            type="regBtn"
            onClick={() => {
              props.onFormSwitch("createacc");
            }}
          >
            Don't have an account? Register here!
          </button>
        </ReusableModal>
      </div>
    </div>
  );
};

export default Login;
