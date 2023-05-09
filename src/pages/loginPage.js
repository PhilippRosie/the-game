import React, { useState } from "react";
import CreateAcc from "../components/createAcc";
import Login from "../components/login";
import "../styles/loginPage.css";

const LoginPage = () => {
  const [currentForm, setCurrentForm] = useState("login");

  const toogleForm = (forName) => {
    setCurrentForm(forName);
  };

  return (
    <div className="loginPageContainer">
      <div className="user-menu">
        {currentForm === "login" ? (
          <Login onFormSwitch={toogleForm} />
        ) : (
          <CreateAcc onFormSwitch={toogleForm} />
        )}
      </div>
    </div>
  );
};

export default LoginPage;
