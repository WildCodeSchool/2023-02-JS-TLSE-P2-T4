import React, { useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Wheel } from "react-custom-roulette";

const data = [
  {
    option: "General Knowledge",
    style: { backgroundColor: "lightgrey", textColor: "black", fontSize: 15 },
  },
  {
    option: "Music",
    style: { backgroundColor: "purple", textColor: "black" },
  },
  {
    option: "Video Games",
    style: { backgroundColor: "orange", textColor: "black" },
  },
  {
    option: "Science & nature",
    style: { backgroundColor: "blue", textColor: "black" },
  },
  {
    option: "Geography",
    style: { backgroundColor: "yellow", textColor: "black" },
  },
  {
    option: "History",
    style: { backgroundColor: "green", textColor: "black" },
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
    <div>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        onStopSpinning={() => {
          setMustSpin(false);
          setShowCat(true);
        }}
      />
      {showCat && <p>{prizeNumber}</p>}
      <button type="button" onClick={handleSpinClick}>
        Launch
      </button>
    </div>
  );
}

export default SpinWheel;
