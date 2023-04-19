import React, { useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Wheel } from "react-custom-roulette";
import "./SpinWheel.css";

const data = [
  {
    name: "General Knowledge",
    option: "General Knowledge",
    style: {
      backgroundColor: "#b260ce",
      textColor: "black",
    },
  },
  {
    option: "Music",
    style: { backgroundColor: "#ffa621", textColor: "black" },
  },
  {
    option: "Video Games",
    style: { backgroundColor: "#ff5858", textColor: "black" },
  },
  {
    option: "Science & nature",
    style: { backgroundColor: "#557aff", textColor: "black" },
  },
  {
    option: "Geography",
    style: { backgroundColor: "#ffe663", textColor: "black" },
  },
  {
    option: "History",
    style: { backgroundColor: "#68e4ff", textColor: "black" },
  },
];

function SpinWheel() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [showCat, setShowCat] = useState(false);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      setShowCat(false);
    }
  };
  return (
    <div className="modalSpinWheel">
      <div className="modalSpinWheel-content">
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          onStopSpinning={() => {
            setMustSpin(false);
            setShowCat(true);
          }}
        />
        {showCat && <p>{data[prizeNumber].name}</p>}
        <button type="button" onClick={handleSpinClick}>
          Launch
        </button>
      </div>
    </div>
  );
}

export default SpinWheel;
