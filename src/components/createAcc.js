import React, { useState } from "react";
import ReusableModal from "./ReusableModal";
import "../styles/createAcc.css";

const CreateAcc = (props) => {
  const [showModal, setShowModal] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div>
      <button className=" createAccBtn" onClick={() => setShowModal(true)}>
        Create Account
      </button>
      <div className="auth-form-container">
        <ReusableModal show={showModal} onClose={() => setShowModal(false)}>
          <form className="form-container" onSubmit={handleSubmit}>
            <h2>Create Account</h2>
            <label htmlFor="name" id="label" className="label">
              Your Name:
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="name"
              id="name"
              className="input"
              required
              placeholder="Enter Your Name"
            />
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
            <button type="submit" className="submitBtn">
              Login
            </button>
          </form>
          <button
            className="reg-login-btn"
            type="regBtn"
            onClick={() => props.onFormSwitch("login")}
          >
            Already have an account? Login here!
          </button>
        </ReusableModal>
      </div>
    </div>
  );
};

export default CreateAcc;
