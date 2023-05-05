import "./Winner.css";
import "./GameBoard";
import PropTypes from "prop-types";
import { LabelsW } from "../components/Utils";

const RedirectHome = () => {
  window.location.replace("/");
};
function Winner({ totalScore }) {
  Winner.propTypes = {
    totalScore: PropTypes.number.isRequired,
  };

  return (
    <section className="winnerBody">
      <section className="winnerBlockText">
        <p className="winnerMessage">CONGRATULATIONS!!</p>
        <p className="winnerComment">You're about to be a real Zilla</p>
      </section>
      <div className="labelScore">
        Score total : <span>{totalScore}</span>{" "}
      </div>
      <ul className="resultUl">
        {LabelsW.map((label) => (
          <li
            key={label.id}
            className={
              label.points > totalScore ? "normalLabel" : "highScoreLabel"
            }
          >{`${label.name} ${label.points}`}</li>
        ))}
      </ul>

      <section>
        <button className="newGame" type="button" onClick={RedirectHome}>
          New Game
        </button>
      </section>
    </section>
  );
}

export default Winner;
