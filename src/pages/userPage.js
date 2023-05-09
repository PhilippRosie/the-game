import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/userPage.css";

const UserPage = ({ username }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userId = JSON.parse(localStorage.getItem("user"));
      const res = await axios.get(`http://localhost:6001/users/${userId}`);
      setUser(res.data);
    };

    fetchUser();
  }, []);

  return (
    <div className="userInfoContainer">
      {user ? (
        <h1>
          HEY{" "}
          <span className="userName" style={{ marginLeft: "10px" }}>
            {user.username.toUpperCase()}
          </span>
          !
        </h1>
      ) : (
        <h2>Loading user data... </h2>
      )}
    </div>
  );
};

export default UserPage;
