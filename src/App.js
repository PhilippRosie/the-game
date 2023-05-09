import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";

import Home from "./pages/Home";
import Profile from "./pages/profile";
import Game from "./pages/game";
import PrivateRoute from "./components/PrivateRoute";
import LoginPage from "./pages/loginPage";
import UserPage from "./pages/userPage";

function App() {
  return (
    // where i learn the route https://www.youtube.com/watch?v=SLfhMt5OUPI&t=358s
    <>
      <Navbar />

      <div className="page-route">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/userpage" element={<UserPage />} />
          <Route
            path="/user"
            element={
              <PrivateRoute>
                <UserPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
