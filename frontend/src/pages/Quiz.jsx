import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import he from "he";
import PropTypes from "prop-types";
import axios from "axios";
import Question from "../components/Question";
import Timer from "../components/Timer";
import "./Quiz.css";
import Loader from "../components/Loader";

function Quiz({
  selectedTimer,
  selectedDifficulty,
  currentScore,
  setCurrentScore,
  setRoundEnd,
  setRoundValid,
  currentPosition,
  combinedDifficulty,
  setCombinedDifficulty,
  scoreStreak,
  setScoreStreak,
}) {
  const { state } = useLocation();
  const { category } = state;
  const { valueD } = selectedDifficulty;
  const { valueT } = selectedTimer;
  // state permettant de stocker l'ensemble des questions fetch pour 1 quiz
  const [questions, setQuestions] = useState();
  // state permettant de mettre à jour la question affichée de façon randomisée
  const [currentQuest, setCurrentQuest] = useState();
  function ternaryDifficulty() {
    if (valueD === "combined" && currentPosition < 5) {
      setCombinedDifficulty("easy");
    } else if (valueD === "combined" && currentPosition < 10) {
      setCombinedDifficulty("medium");
    } else if (valueD === "combined") {
      setCombinedDifficulty("hard");
    } else setCombinedDifficulty(valueD);
  }
  // fetch des données
  useEffect(() => {
    ternaryDifficulty();
    axios
      .get(
        `https://opentdb.com/api.php?amount=30&category=${category}&difficulty=${combinedDifficulty}&type=multiple`
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

  useEffect(() => {
    if (currentScore >= 80) {
      setRoundValid(true);
    }
  }, [currentScore]);

  return questions ? (
    <div className="quizContainer">
      <div className="quizHeader">
        <div className="score">
          <p>
            Score : <span className="scoreNumb">{currentScore}</span>
          </p>
        </div>
        <div className="timer">
          <img
            className="timeIcon"
            src="\assets\Timer_Icon.svg"
            alt="time icon"
          />
          <Timer
            valueT={valueT}
            setRoundEnd={setRoundEnd}
            selectedTimer={selectedTimer}
          />
        </div>
      </div>

      <Question
        key={currentQuest}
        currentQuest={currentQuest}
        setCurrentQuest={setCurrentQuest}
        setCurrentScore={setCurrentScore}
        currentScore={currentScore}
        questions={questions}
        setRoundEnd={setRoundEnd}
        scoreStreak={scoreStreak}
        setScoreStreak={setScoreStreak}
      />
    </div>
  ) : (
    <Loader />
  );
}

Quiz.propTypes = {
  selectedTimer: PropTypes.objectOf(PropTypes.number),
  selectedDifficulty: PropTypes.objectOf(PropTypes.string),
  currentScore: PropTypes.number.isRequired,
  setCurrentScore: PropTypes.func.isRequired,
  setRoundEnd: PropTypes.func.isRequired,
  setRoundValid: PropTypes.func.isRequired,
  currentPosition: PropTypes.number.isRequired,
  combinedDifficulty: PropTypes.string.isRequired,
  setCombinedDifficulty: PropTypes.func.isRequired,
  scoreStreak: PropTypes.number.isRequired,
  setScoreStreak: PropTypes.func.isRequired,
};

Quiz.defaultProps = {
  selectedTimer: { valueT: 60 },
  selectedDifficulty: { valueD: "Easy" },
};

export default Quiz;
