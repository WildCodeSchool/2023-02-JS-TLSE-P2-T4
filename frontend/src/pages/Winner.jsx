import "./Winner.css";
import "./GameBoard";
import { LabelsW } from "../components/Utils";

const scoretotal = 900;
const RedirectHome = () => {
  window.location.replace("/");
};
function Winner() {
  return (
    <section className="winnerBody">
      <section className="winnerBlockText">
        <p className="winnerMessage">CONGRATULATIONS!!</p>
        <p className="winnerComment">You're about to be a real Zilla</p>
      </section>
      <div className="labelScore">{`Score total : ${scoretotal}`}</div>
      <section className="resultBody">
        <ul className="resultUl">
          {LabelsW.map((label) => (
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

export default Winner;
