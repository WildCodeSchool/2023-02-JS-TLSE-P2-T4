import "./Winner.css";
import "./GameBoard";
import { Link } from "react-router-dom";

const Labels = [
  "GoatZilla 2000",
  "LaZilla  3000",
  "FuzZilla 4000",
  "GlaZilla 5000",
  "SmooZilla 6000",
  "FizZilla 7000",
  "CraZilla 8000",
  "GodZilla 10000",
];
const scoretotal = 6851;
// const labelLevels = [2000, 3000, 4000, 5000, 6000, 7000, 8000, 10000];
export default function loser() {
  return (
    <section className="winnerBody">
      <section className="winnerText">
        <p className="winnerMessage">NOOb !!</p>
        <p className="winnerComment">
          Whatever your name, you will always be a NoobZilla
        </p>
      </section>
      <div className="labelScore">{`Score total : ${scoretotal}`}</div>
      <section className="resultBody">
        <ul className="resultUl">
          {Labels.map((label) => (
            <li key="label">{`${label}`}</li>
          ))}
        </ul>
      </section>
      <section className="buttons">
        <button type="button"> New Game </button>
        <Link to="/gameboard" />
      </section>
    </section>
  );
}
