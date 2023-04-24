import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Modal from "./components/modal";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Game from "./pages/game";

function App() {
  return (
    <>
      <Navbar />
      <Modal />
      <div className="page-route">
        {" "}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
