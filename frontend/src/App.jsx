import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quiz from "./pages/Quiz";
import GameBoard from "./pages/GameBoard";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Rules from "./pages/Rules";
import Navbar from "./components/Navbar";
// eslint-disable-next-line import/no-extraneous-dependencies
import "primereact/resources/primereact.min.css";
import Winner from "./pages/Winner";
import Loser from "./pages/Loser";

function App() {
  const timer = [
    { valueT: 45 },
    { valueT: 60 },
    { valueT: 90 },
    { valueT: 120 },
  ];
  const difficulty = [
    { valueD: "easy" },
    { valueD: "medium" },
    { valueD: "hard" },
    { valueD: "combined" },
  ];
  const [selectedTimer, setSelectedTimer] = useState({ valueT: 45 });
  const [selectedDifficulty, setSelectedDifficulty] = useState({
    valueD: "easy",
  });
  const [currentPosition, setCurrentPosition] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [roundEnd, setRoundEnd] = useState(false);
  const [roundValid, setRoundValid] = useState(false);
  const [life, setLife] = useState(1);

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
                selectedDifficulty={selectedDifficulty}
                currentPosition={currentPosition}
                setCurrentPosition={setCurrentPosition}
                totalScore={totalScore}
                setTotalScore={setTotalScore}
                currentScore={currentScore}
                setCurrentScore={setCurrentScore}
                roundEnd={roundEnd}
                setRoundEnd={setRoundEnd}
                roundValid={roundValid}
                setRoundValid={setRoundValid}
                life={life}
                setLife={setLife}
              />
            }
          />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/winner" element={<Winner totalScore={totalScore} />} />
          <Route path="/loser" element={<Loser totalScore={totalScore} />} />
          <Route
            path="/gameboard/quiz"
            element={
              <Quiz
                selectedTimer={selectedTimer}
                selectedDifficulty={selectedDifficulty}
                currentScore={currentScore}
                setCurrentScore={setCurrentScore}
                roundEnd={roundEnd}
                setRoundEnd={setRoundEnd}
                roundValid={roundValid}
                setRoundValid={setRoundValid}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
