import "./Home.css";

function Home() {
  return (
    <section className="home-body">
      <section className="welcome-text">
        <p className="welcome-message">Welcome to Quizilla</p>
        <p className="welcome-comment">
          Test your knowledge and challenge your brain with our exiting Quiz!
        </p>
        <p className="welcome-choice">Try it !</p>
      </section>
      <section className="buttons">
        <button type="button" className="button-settings">
          Settings
        </button>
        <button type="button" className="button-start">
          Start
        </button>
      </section>
    </section>
  );
}
export default Home;
