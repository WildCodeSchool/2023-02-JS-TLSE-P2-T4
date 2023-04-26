function Quiz() {
  return (
    <div className="quizContainer">
      <div className="quizHeader">
        <div className="score"></div>
        <div className="timer"></div>
      </div>
      <Question />
    </div>
  );
}

export default Quiz;
