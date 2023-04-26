import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "primereact/dropdown";
import PropTypes from "prop-types";
import "./Settings.css";

function Settings({
  timer,
  difficulty,
  selectedTimer,
  setSelectedTimer,
  selectedDifficulty,
  setSelectedDifficulty,
}) {
  return (
    <div className="blurSettings">
      <div className="modalSettings">
        <div className="dropDown">
          <Dropdown
            value={selectedTimer}
            onChange={(e) => setSelectedTimer(e.value)}
            options={timer}
            optionLabel="valueT"
            placeholder="Select your default timer"
            className="w-full md:w-14rem"
          />
        </div>
        <div className="dropDown">
          <Dropdown
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.value)}
            options={difficulty}
            optionLabel="valueD"
            placeholder="Select a difficulty"
            className="w-full md:w-14rem"
          />
        </div>
        <Link to="/gameboard">
          <button type="button">Start</button>
        </Link>
      </div>
    </div>
  );
}

Settings.propTypes = {
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
Settings.defaultProps = {
  setSelectedTimer: false,
  setSelectedDifficulty: false,
  selectedTimer: { valueT: 60 },
  selectedDifficulty: { valueD: "Easy" },
};

export default Settings;
