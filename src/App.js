import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Game from "./pages/game";

function App() {
  return (
    <>
      <Navbar />

      <div className="page-route">
        {" "}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
