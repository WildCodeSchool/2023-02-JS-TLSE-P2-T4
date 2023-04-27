import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quiz from "./pages/Quiz";
import GameBoard from "./pages/GameBoard";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Rules from "./pages/Rules";
import Navbar from "./components/Navbar";
import Winner from "./pages/Winner";
import Loser from "./pages/Loser";

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
          <Route path="/winner" element={<Winner />} />
          <Route path="/loser" element={<Loser />} />
          <Route path="/gameboard/quiz" element={<Quiz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
