import "./Winner.css";
import "./GameBoard";
import { Link } from "react-router-dom";

const Labels = [
  { id: 0, name: "GoatZilla", points: 2000 },
  { id: 1, name: "LaZilla", points: 3000 },
  { id: 2, name: "FuztZilla", points: 4000 },
  { id: 3, name: "GlaZilla", points: 5000 },
  { id: 4, name: "SmootZilla", points: 6000 },
  { id: 5, name: "FizZilla", points: 7000 },
  { id: 6, name: "CratZilla", points: 8000 },
  { id: 7, name: "GodZilla", points: 10000 },
];
const scoretotal = 6851;
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
            <li key="label">{`${label.name} ${label.points}`}</li>
          ))}
        </ul>
      </section>
      <section className="newGame">
        <Link to="/gameboard">
          <button type="button"> New Game </button>
        </Link>
      </section>
    </section>
  );
}
