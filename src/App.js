import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";

import Home from "./pages/Home";
import Profile from "./pages/profile";
import Game from "./pages/game";

function App() {
  return (
    <>
      <Navbar />
      <div className="page-route">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
