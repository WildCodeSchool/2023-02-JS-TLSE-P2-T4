import "./Winner.css";
import "./GameBoard";
import PropTypes from "prop-types";
import { LabelsL } from "../components/Utils";

const RedirectHome = () => {
  window.location.replace("/");
};
function Loser({ totalScore }) {
  Loser.propTypes = {
    totalScore: PropTypes.number.isRequired,
  };
  return (
    <section className="winnerBody">
      <section className="winnerBlockText">
        <p className="winnerMessage">NOOBY !!</p>
        <p className="winnerComment">
          Whatever your name,
          <br /> you will always be a NoobZilla
        </p>
      </section>
      <div className="labelScore">
        Score total :<span>{totalScore}</span>
      </div>
      <ul className="resultUl">
        {LabelsL.map((label) => (
          <li
            key={label.id}
            className={
              label.points >= totalScore ? "normalLabel" : "highScoreLabel"
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

export default Loser;
