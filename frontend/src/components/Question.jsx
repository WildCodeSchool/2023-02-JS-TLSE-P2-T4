import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function Question({ currentQuest, questions }) {
  const [options, setOptions] = useState();

  // fonction permettant de mélanger les éléments d'un tableau
  const handleShuffle = (arr) => {
    return arr.sort(() => Math.random() - 0.5);
  };

  // useffect permettant de mélanger les réponses afin qu'elles ne soient pas toujours dans le même ordre
  useEffect(() => {
    questions &&
      setOptions(
        handleShuffle([
          questions[currentQuest].correct_answer,
          ...questions[currentQuest].incorrect_answers,
        ])
      );
  }, [questions, currentQuest]);

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
                  onClick={() => {}}
                  className={`singleOption
                    ${
                      opt === questions[currentQuest].correct_answer
                        ? "correct"
                        : "wrong"
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

Question.propTypes = {
  currentQuest: PropTypes.number,
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      correct_answer: PropTypes.string,
      incorrect_answers: PropTypes.string,
      question: PropTypes.string,
    })
  ),
};

// 3:21  error  'currentQuest' is missing in props validation                          react/prop-types
// 3:35  error  'questions' is missing in props validation                             react/prop-types
// 13:5   error  Expected an assignment or function call and instead saw an expression  no-unused-expressions
// 16:35  error  'questions[].correct_answer' is missing in props validation            react/prop-types
// 17:38  error  'questions[].incorrect_answers' is missing in props validation         react/prop-types
// 25:59  error  'questions[].question' is missing in props validation                  react/prop-types
// 35:55  error  'questions[].correct_answer' is missing in props validation            react/prop-types
// 39:48  error  'questions[].question' is missing in props validation

export default Question;
