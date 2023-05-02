import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { he } from "he";
import PropTypes from "prop-types";
import axios from "axios";
import Question from "../components/Question";
import Timer from "../components/Timer";
import "./Quiz.css";

function Quiz({ selectedTimer, selectedDifficulty }) {
  const { state } = useLocation();
  const { category } = state;
  const { valueD } = selectedDifficulty;
  const { valueT } = selectedTimer;
  // state permettant de stocker l'ensemble des questions fetch pour 1 quiz
  const [questions, setQuestions] = useState();
  // state pour incrémenter le score
  const [score, setScore] = useState(0);
  // state permettant de mettre à jour la question affichée de façon randomisée
  const [currentQuest, setCurrentQuest] = useState();

  // fetch des données
  useEffect(() => {
    axios
      .get(
        `https://opentdb.com/api.php?amount=50&category=${category}&difficulty=${valueD}&type=multiple`
      )
      .then((res) => {
        // eslint-disable-next-line
        const { response_code, results } = res.data;

        // vérification des codes d'erreurs potentiels
        // eslint-disable-next-line
        if (response_code === 1) {
          console.error(
            "No Results Could not return results. The API doesn't have enough questions for your query."
          );
          // eslint-disable-next-line
        } else if (response_code === 2) {
          console.error(
            "Invalid Parameter Contains an invalid parameter. Arguements passed in aren't valid."
          );
        }

        // décodage des html entities
        const decodedResults = results.map((el) => {
          return {
            ...el,
            question: he.decode(el.question),
            correct_answer: he.decode(el.correct_answer),
            incorrect_answers: el.incorrect_answers.map((inc) =>
              he.decode(inc)
            ),
          };
        });

        setQuestions(decodedResults);
        setCurrentQuest(Math.floor(Math.random() * results.length));
      })

      .catch((err) => console.error(err));
  }, []);

  // hook pour naviguer automatiquement vers le board après un délai de 60s

  return (
    questions && (
      <div className="quizContainer">
        <div className="quizHeader">
          <div className="score">
            <p>Score : {score}</p>
          </div>
          <div className="timer">
            <img
              className="timeIcon"
              src="\assets\Timer_Icon.svg"
              alt="time icon"
            />
            <Timer valueT={valueT} />
          </div>
        </div>

        <Question
          key={currentQuest}
          currentQuest={currentQuest}
          setCurrentQuest={setCurrentQuest}
          setScore={setScore}
          score={score}
          questions={questions}
        />
      </div>
    )
  );
}

Quiz.propTypes = {
  selectedTimer: PropTypes.objectOf(PropTypes.number),
  selectedDifficulty: PropTypes.objectOf(PropTypes.string),
};

Quiz.defaultProps = {
  selectedTimer: { valueT: 60 },
  selectedDifficulty: { valueD: "Easy" },
};

export default Quiz;
