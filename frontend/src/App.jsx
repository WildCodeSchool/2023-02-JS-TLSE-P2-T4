import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameBoard from "./pages/GameBoard";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Rules from "./pages/Rules";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gameboard" element={<GameBoard />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
