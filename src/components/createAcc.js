import React, { useState } from "react";
import axios from "axios";
import ReusableModal from "./ReusableModal";
import "../styles/createAcc.css";

const CreateAcc = (props) => {
  const [showModal, setShowModal] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const checkEmail = (users) => {
    const user = users.find((user) => user.email === email);
    if (user) return user;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = await axios
      .get("http://localhost:6001/users")
      .then((res) => checkEmail(res.data, email));
    if (user) {
      alert("User already exist!");
    } else {
      const user = { username, email, pass };
      axios
        .post("http://localhost:6001/users", user)
        .then(alert("User Created!"));
    }
    setEmail("");
    setPass("");
    setShowModal(false);
  };

  return (
    <div>
      <button className=" createAccBtn" onClick={() => setShowModal(true)}>
        Create Account
      </button>
      <div className="auth-form-container-createacc">
        <ReusableModal show={showModal} onClose={() => setShowModal(false)}>
          <form className="form-container-createacc" onSubmit={handleSubmit}>
            <h2>Create Account</h2>
            <label htmlFor="name" id="label" className="label">
              Your Name:
            </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
            <button
              type="submit"
              className="submitBtn-reg"
              onClick={() => {
                handleSubmit();
                props.onFormSwitch("login");
              }}
            >
              Register!
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
