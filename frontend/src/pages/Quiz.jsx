import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Question from "../components/Question";
import Timer from "../components/Timer";
import "./Quiz.css";

function Quiz() {
  // state permettant de stocker l'ensemble des questions fetch pour 1 quiz
  const [questions, setQuestions] = useState();
  const [qWithoutIds, setQWithoutIds] = useState();
  // state pour incrémenter le score
  const [score, setScore] = useState(0);
  // state permettant de mettre à jour la question affichée de façon randomisée
  const [currentQuest, setCurrentQuest] = useState();
  // Math.floor(Math.random() * 49)

  // fetch des données
  useEffect(() => {
    axios
      .get(
        "https://opentdb.com/api.php?amount=50&category=9&difficulty=medium&type=multiple"
      )
      .then((res) => setQWithoutIds(res.data.results))
      .catch((err) => {
        err.message();
      });
  }, []);

  function addUniqueIds(array) {
    const newArray = array.map((item, index) => ({
      ...item,
      id: index,
    }));
    setQuestions(newArray);
  }
  useEffect(() => {
    if (qWithoutIds) {
      addUniqueIds(qWithoutIds);
    }
  }, [qWithoutIds]);

  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/gameboard");
    }, 60000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="quizContainer">
      <div className="quizHeader">
        <div className="score">
          <p>Score : {score}</p>
        </div>
        <div className="timer">
          <img
            className="timeIcon"
            src="frontend\src\assets\Timer_Icon.svg"
            alt="time icon"
          />
          <Timer />
        </div>
      </div>

      {questions ? (
        <Question
          currentQuest={currentQuest}
          setCurrentQuest={setCurrentQuest}
          setScore={setScore}
          score={score}
          questions={questions}
          setQuestions={setQuestions}
        />
      ) : (
        <p>Wait please</p>
      )}
    </div>
  );
}

export default Quiz;
