import "./Winner.css";
import "./GameBoard";
import { LabelsL } from "../components/Utils";

const scoretotal = 1000;
const RedirectHome = () => {
  window.location.replace("/");
};
function Loser() {
  return (
    <section className="winnerBody">
      <section className="winnerBlockText">
        <p className="winnerMessage">NOOb !!</p>
        <p className="winnerComment">
          Whatever your name, you will always be a NoobZilla
        </p>
      </section>
      <div className="labelScore">{`Score total : ${scoretotal}`}</div>
      <section className="resultBody">
        <ul className="resultUl">
          {LabelsL.map((label) => (
            <li
              key={label.id}
              className={
                label.points >= scoretotal ? "normalLabel" : "highScoreLabel"
              }
            >{`${label.name} ${label.points}`}</li>
          ))}
        </ul>
      </section>
      <section className="newGame">
        <button type="button" onClick={RedirectHome}>
          New Game
        </button>
      </section>
    </section>
  );
}

export default Loser;
