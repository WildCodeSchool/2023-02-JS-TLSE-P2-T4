import "./Winner.css";
import { Link } from "react-router-dom";

export default function winner() {
  return (
    <section className="winnereBody">
      <section className="winnerText">
        <p className="winnerMessage">Congratulation</p>
        <p className="winnerComment">You're about to be a real Zilla</p>
      </section>

      <section className="buttons">
        <button type="button">New Game</button>
        <Link to="/gameboard" />
      </section>
    </section>
  );
}
