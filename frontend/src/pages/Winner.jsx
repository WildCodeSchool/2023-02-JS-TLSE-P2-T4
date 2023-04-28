import "./Winner.css";
import "./GameBoard";
import { Link } from "react-router-dom";

const Labels = [
  { id: 0, name: "GoatZilla ", points: 750 },
  { id: 1, name: "LaZilla", points: 800 },
  { id: 2, name: "FuztZilla ", points: 850 },
  { id: 3, name: "GlaZilla  ", points: 900 },
  { id: 4, name: "SmootZilla", points: 950 },
  { id: 5, name: "FizZilla  ", points: 1000 },
  { id: 6, name: "CratZilla ", points: 1100 },
  { id: 7, name: "GodZilla  ", points: 1500 },
];
const scoretotal = 900;
export default function winner() {
  return (
    <section className="winnerBody">
      <section className="winnerBlockText">
        <p className="winnerMessage">CONGRATULATIONS!!</p>
        <p className="winnerComment">You're about to be a real Zilla</p>
      </section>
      <div className="labelScore">{`Score total : ${scoretotal}`}</div>
      <section className="resultBody">
        <ul className="resultUl">
          {Labels.map((label) => (
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
        <Link to="/gameboard">
          <button type="button"> New Game </button>
        </Link>
      </section>
    </section>
  );
}
