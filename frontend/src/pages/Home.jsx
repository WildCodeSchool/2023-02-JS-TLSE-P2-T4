import "./Home.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Settings from "../components/Settings";

function Home({
  timer,
  difficulty,
  selectedTimer,
  setSelectedTimer,
  selectedDifficulty,
  setSelectedDifficulty,
}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <section className="homeBody">
      <section className="welcomeText">
        <p className="welcomeMessage">Welcome to Quizilla</p>
        <p className="welcomeComment">
          Test your knowledge and challenge your brain with our exiting Quiz!
        </p>
        <p className="welcomeChoice">
          Select your preferences or get started right away!
        </p>
      </section>

      {modalIsOpen ? (
        <Settings
          timer={timer}
          difficulty={difficulty}
          selectedTimer={selectedTimer}
          setSelectedTimer={setSelectedTimer}
          selectedDifficulty={selectedDifficulty}
          setSelectedDifficulty={setSelectedDifficulty}
          setModalIsOpen={setModalIsOpen}
        />
      ) : (
        <section className="buttons">
          <button
            type="button"
            className="button settings"
            onClick={() => setModalIsOpen(true)}
          >
            Settings
          </button>
          <Link to="/gameboard">
            <button
              className="button start"
              type="button"
              onClick={() => {
                setSelectedTimer({ valueT: 60 });
                setSelectedDifficulty({ valueD: "easy" });
              }}
            >
              Start
            </button>
          </Link>
        </section>
      )}
    </section>
  );
}

Home.propTypes = {
  timer: PropTypes.arrayOf(
    PropTypes.shape({ valueT: PropTypes.number.isRequired })
  ).isRequired,
  difficulty: PropTypes.arrayOf(
    PropTypes.shape({ valueD: PropTypes.string.isRequired })
  ).isRequired,
  selectedTimer: PropTypes.objectOf(PropTypes.number),
  setSelectedTimer: PropTypes.func,
  selectedDifficulty: PropTypes.objectOf(PropTypes.string),
  setSelectedDifficulty: PropTypes.func,
};
Home.defaultProps = {
  selectedTimer: { valueT: 60 },
  setSelectedTimer: false,
  selectedDifficulty: { valueD: "Easy" },
  setSelectedDifficulty: false,
};

export default Home;
