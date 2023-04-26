import Question from "@components/Question";
import { useEffect, useState } from "react";
import axios from "axios";
import Timer from "@components/Timer";

function Quiz() {
  // state permettant de stocker l'ensemble des questions fetch pour 1 quiz
  const [questions, setQuestions] = useState();
  // state pour incrémenter le score
  const [score, setScore] = useState(0);
  // state permettant de mettre à jour la question affichée de façon randomisée
  const [currentQuest, setCurrentQuest] = useState(
    Math.floor(Math.random() * 49)
  );

  // fetch des données
  useEffect(() => {
    axios
      .get(
        "https://opentdb.com/api.php?amount=50&category=9&difficulty=medium&type=multiple"
      )
      .then((res) => setQuestions(res.data.results))
      .catch((err) => {
        err.message();
      });
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
