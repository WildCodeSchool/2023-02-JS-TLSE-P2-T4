import "./Home.css";
import Settings from "../components/Settings";
import Board from "./GameBoard";

function Home() {
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
        <button type="button" onClick={<Settings />}>
          Settings
        </button>
        <button type="button" onClick={<Board />}>
          Start
        </button>
      </section>
    </section>
  );
}
export default Home;
