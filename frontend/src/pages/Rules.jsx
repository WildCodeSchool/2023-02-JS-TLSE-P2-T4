import "./Rules.css";

function Rules() {
  return (
    <div className="rulesPage">
      <h1 className="rulesHead">Game Rules</h1>
      <div className="rulesExplication">
        <div className="objectives">
          <h2>Player Objective</h2>
          <p>
            Navigate the game board by correctly answering quiz questions to
            reach the exit.
          </p>
        </div>

        <div className="gameRules">
          <h2>Game Rules</h2>
          <p>
            <span>1.</span> Click "Start" to access the game board directly or
            click the "settings" button to set your preferences.
          </p>
          <p>
            <span>2.</span> Roll the wheel by clicking "Roll." The wheel will
            select a quiz theme at random for the current square.
          </p>
          <p>
            <span>3.</span> Once the theme is selected, a timed quiz will
            appear. Answer questions correctly to validate the theme based on
            the score. If you answer multiple questions correctly in a row, your
            score will increase more quickly.
          </p>
          <p>
            <span>4.</span> If you answer correctly, the square will be colored
            based on the theme and you can move on to the next square. If you
            answer incorrectly, you will return to the starting square. However,
            a wildcard is available during gameplay to change a question.
          </p>
          <p>
            <span>5.</span> Continue to progress through the maze by answering
            quiz questions correctly until you reach the exit.
          </p>
          <p>
            <span>6.</span> You win when you reach the last square of the board!
          </p>
        </div>
        <span className="fun">Good luck and have fun!</span>
      </div>
    </div>
  );
}

export default Rules;
