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
export default function winner() {
  return (
    <section className="winnerBody">
      <section className="winnerText">
        <p className="winnerMessage">Congratulation</p>
        <p className="winnerComment">You're about to be a real Zilla</p>
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
        <Link to="/gameboard">
          <button type="button"> New Game </button>
        </Link>
      </section>
    </section>
  );
}
