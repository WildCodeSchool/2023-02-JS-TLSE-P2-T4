import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function Question({
  currentQuest,
  questions,
  setCurrentQuest,
  setScore,
  score,
}) {
  // state de modification des réponses
  const [options, setOptions] = useState();
  //   state de modification des classes des réponses
  const [wrongAnswerClass, setWrongAnswerClass] = useState("");
  const [rightAnswerClass, setRightAnswerClass] = useState("");

  // fonction permettant de mélanger les éléments d'un tableau.
  const handleShuffle = (arr) => {
    return arr.sort(() => Math.random() - 0.5);
  };

  // useffect permettant de mélanger les réponses afin qu'elles ne soient pas toujours dans le même ordre.
  useEffect(() => {
    if (questions) {
      setOptions(
        handleShuffle([
          questions[currentQuest].correct_answer,
          ...questions[currentQuest].incorrect_answers,
        ])
      );
    }
  }, [questions, currentQuest]);

  //   fonction permettant d'afficher la bonne et les mauvaises réponses après un clic sur l'une d'entre elles.
  const handleClickClasses = (opt) => {
    if (opt === questions[currentQuest].correct_answer) {
      setRightAnswerClass("correct");
      setScore(score + 200);
    } else {
      setWrongAnswerClass("wrong");
      setRightAnswerClass("correct");
    }
  };

  //   fonction permettant d'afficher la question suivante de façon aléatoire dans un délai après le clic.
  const handleClickNext = () => {
    setTimeout(() => {
      setRightAnswerClass("");
      setWrongAnswerClass("");
      questions.splice(currentQuest, 1);
      setCurrentQuest(Math.floor(Math.random() * questions.length) + 1);
    }, 1600);
  };

  // ------------------------return du composant---------------------------
  return (
    <div>
      <div>
        <h1 className="question">{questions[currentQuest].question}</h1>
      </div>
      <div className="answers">
        {options
          ? options.map((opt) => {
              return (
                <button
                  onClick={() => {
                    handleClickClasses(opt);
                    handleClickNext();
                  }}
                  className={`singleOption
                    ${
                      opt === questions[currentQuest].correct_answer
                        ? rightAnswerClass
                        : wrongAnswerClass
                    }`}
                  key={questions[currentQuest].question}
                  type="button"
                >
                  {opt}
                </button>
              );
            })
          : null}
      </div>
    </div>
  );
}

// ---------------------PropTypes---------------------
Question.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      correct_answer: PropTypes.string,
      incorrect_answers: PropTypes.string,
      question: PropTypes.string,
    })
  ),
  currentQuest: PropTypes.number,
  setCurrentQuest: PropTypes.func,
  score: PropTypes.number,
  setScore: PropTypes.func,
};

Question.defaultProps = {
  currentQuest: 0,
  questions: [],
  score: 0,
  setScore: 0,
  setCurrentQuest: 0,
};

export default Question;
