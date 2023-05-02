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
  setModalIsOpen,
}) {
  return (
    <>
      <div
        className="blurSettings"
        role="button"
        onClick={() => setModalIsOpen(false)}
        onKeyDown={() => setModalIsOpen(false)}
        tabIndex="0"
        aria-label="Close Settings"
      />
      <div className="modalSettings">
        <div className="dropdown">
          <Dropdown
            value={selectedTimer}
            onChange={(e) => setSelectedTimer(e.value)}
            options={timer}
            optionLabel="valueT"
            placeholder="Select your default timer ..."
            className="selectDropdown"
          />
        </div>
        <div className="dropdown">
          <Dropdown
            value={selectedDifficulty}
            onChange={(e) => {
              setSelectedDifficulty(e.value);
            }}
            options={difficulty}
            optionLabel="valueD"
            placeholder="Select a difficulty ..."
            className="selectDropdown"
          />
        </div>
        <Link to="/gameboard" className="linkStart">
          <button type="button" className="button button-settings">
            Start
          </button>
        </Link>
      </div>
    </>
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
  setModalIsOpen: PropTypes.func,
};
Settings.defaultProps = {
  setSelectedTimer: false,
  setSelectedDifficulty: false,
  setModalIsOpen: false,
  selectedTimer: { valueT: 60 },
  selectedDifficulty: { valueD: "Easy" },
};

export default Settings;
