import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="homeBody">
      <section className="welcomeText">
        <p className="welcomeMessage">Welcome to Quizilla</p>
        <p className="welcomeComment">
          Test your knowledge and challenge your brain with our exiting Quiz!
        </p>
        <p className="welcomeChoice">Try it !</p>
      </section>
      <section className="buttons">
        <button className="button start" type="button">
          Start
        </button>
        <button className="button settings" type="button">
          Settings
        </button>
        <Link to="/gameboard" />
      </section>
    </section>
  );
}
