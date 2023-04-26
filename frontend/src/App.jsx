import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameBoard from "./pages/GameBoard";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Rules from "./pages/Rules";
import Navbar from "./components/Navbar";
// theme
// import "primereact/resources/themes/lara-light-indigo/theme.css";
// core
import "primereact/resources/primereact.min.css";

function App() {
  const timer = [
    { valueT: 45 },
    { valueT: 60 },
    { valueT: 90 },
    { valueT: 120 },
  ];
  const difficulty = [
    { valueD: "Easy" },
    { valueD: "Medium" },
    { valueD: "Hard" },
    { valueD: "Combined" },
  ];
  const [selectedTimer, setSelectedTimer] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                timer={timer}
                difficulty={difficulty}
                selectedTimer={selectedTimer}
                setSelectedTimer={setSelectedTimer}
                selectedDifficulty={selectedDifficulty}
                setSelectedDifficulty={setSelectedDifficulty}
              />
            }
          />
          <Route
            path="/gameboard"
            element={
              <GameBoard
                selectedTimer={selectedTimer}
                setSelectedTimer={setSelectedTimer}
              />
            }
          />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
