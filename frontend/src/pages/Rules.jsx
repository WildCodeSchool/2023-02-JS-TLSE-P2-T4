import "./Rules.css";

function Rules() {
  return (
    <div className="rulesPage">
      <div className="rulesHead">
        <h1>The rules of your quizilla game </h1>
        <h2>Quiz game rules</h2>
      </div>
      <div className="rulesExplication">
        <div className="rulesParaph">
          <span>Number of Players: </span> 1 <br />
          <span>Player Objective:</span>
          Navigate the game board by correctly answering quiz questions to reach
          the exit.
          <br />
          <span>Game Rules:</span> 1.
          <br /> Click "Start" to access the game board. <br />
          2. Roll the wheel by clicking "Roll." The wheel will select a quiz
          theme at random for the current square.
          <br />
          <div>
            3. Once the theme is selected, a timed quiz will appear. Answer the
            questions correctly to validate the theme based on the score. If you
            answer multiple questions correctly in a row, your score will
            increase more quickly.
          </div>
          <br /> 4. If you answer correctly, the square will be colored based on
          the theme and you can move on to the next square. If you answer
          incorrectly, you will return to the starting square. However, a
          wildcard is available during game play to change a question.
          <br /> 5. Continue to progress through the maze by answering quiz
          questions correctly until you reach the exit.
          <br />
          6. You win when you reach the exit.
          <br /> <br />
          <span className="fun">Good luck and have fun!</span>
        </div>
      </div>
    </div>
  );
}

export default Rules;
