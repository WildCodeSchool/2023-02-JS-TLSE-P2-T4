import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Question.css";

function Question({
  currentQuest,
  questions,
  setCurrentQuest,
  currentScore,
  setCurrentScore,
  setRoundEnd,
  scoreStreak,
  setScoreStreak,
}) {
  const oneQuestion = questions[currentQuest];
  // eslint-disable-next-line
  const { correct_answer, incorrect_answers, question } = oneQuestion;
  // eslint-disable-next-line
  const incorrectAnswers = incorrect_answers;
  // eslint-disable-next-line
  const correctAnswer = correct_answer;
  const allAnswers = [correctAnswer, ...incorrectAnswers];
  const navigate = useNavigate();

  const [questionTitle, setQuestionTitle] = useState("");

  //   state de modification des réponses
  const [answers, setAnswers] = useState([]);

  //   state de modification de l'état cliquable
  const [clicked, setClicked] = useState(false);

  // state qui récupère la valeur texte de la réponse sélectionnée
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // fonction permettant de mélanger les éléments d'un tableau.
  const handleShuffle = (arr) => {
    return arr.sort(() => Math.random() - 0.5);
  };

  // récupère le texte de la réponse sélectionnée
  const handleClickSelect = (event) => {
    setSelectedAnswer(event.target.textContent);
    setClicked(true);
  };

  // effet permettant d'incrémenter le score si une réponse est sélectionnée et si la réponse est correcte
  useEffect(() => {
    if (clicked && selectedAnswer === correctAnswer) {
      setCurrentScore(currentScore + 10 + scoreStreak);
      setScoreStreak(scoreStreak + 1);
    } else if (clicked && selectedAnswer !== correctAnswer) {
      setScoreStreak(0);
    }
  }, [clicked, selectedAnswer]);

  useEffect(() => {
    // si une réponse est cliquée, lance une fonction avec une latence de 1s
    if (clicked === true) {
      setTimeout(() => {
        // si le nombre de questions fetchées est supérieur à 1, on enlève la question à laquelle on a répondu et on restocke une question aléatoire dans la variable currentQuest. Si on est arrivé au bout du pull de questions, on retourne au plateau de jeu.
        if (questions.length > 1) {
          questions.splice(currentQuest, 1);
          setCurrentQuest(Math.floor(Math.random() * questions.length));
          setClicked(false);
        } else if (questions.length === 1) {
          setCurrentQuest(0);
          setClicked(true);
          setRoundEnd(true);
          navigate("/gameboard");
        }
      }, 1000);
    }
  }, [clicked]);

  // hook pour mélanger les réponses et afficher le titre de la question
  useEffect(() => {
    setQuestionTitle(question);
    setAnswers(() => handleShuffle(allAnswers));
  }, [oneQuestion]);

  // ------------------------return du composant---------------------------
  return (
    <div className="questionContent">
      <div>
        <h1 className="question">{questionTitle}</h1>
      </div>
      <div className="answers">
        {answers.map((answer) => {
          let className = `singleAnswer`;

          if (answer === correctAnswer && answer === selectedAnswer) {
            className += ` correct`;
          }
          if (answer !== correctAnswer && answer === selectedAnswer) {
            className += ` incorrect`;
          }

          return (
            <button
              key={answer}
              onClick={handleClickSelect}
              className={className}
              disabled={clicked}
              type="button"
            >
              {answer}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ---------------------PropTypes---------------------
Question.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      correct_answer: PropTypes.string,
      incorrect_answers: PropTypes.arrayOf(PropTypes.string),
      question: PropTypes.string,
    })
  ),
  currentQuest: PropTypes.number,
  setCurrentQuest: PropTypes.func,
  currentScore: PropTypes.number,
  setCurrentScore: PropTypes.func,
  setRoundEnd: PropTypes.func.isRequired,
  scoreStreak: PropTypes.number.isRequired,
  setScoreStreak: PropTypes.func.isRequired,
};

Question.defaultProps = {
  currentQuest: 0,
  questions: [],
  currentScore: 0,
  setCurrentScore: 0,
  setCurrentQuest: 0,
};

export default Question;
