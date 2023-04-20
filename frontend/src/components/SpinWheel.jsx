import React, { useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Wheel } from "react-custom-roulette";
import "./SpinWheel.css";

const data = [
  {
    name: "General Knowledge",
    option: "General Knowledge",
    image: { uri: "./src/assets/GeneralKnowledge_Icon.svg", offsetY: 160 },
    style: {
      backgroundColor: "#b260ce",
    },
  },
  {
    name: "Music",
    option: "Music",
    image: { uri: "./src/assets/Music_Icon.svg", offsetY: 160 },
    style: { backgroundColor: "#ffa621" },
  },
  {
    name: "Video Games",
    option: "Video Games",
    image: { uri: "./src/assets/VideoGames_Icon.svg", offsetY: 160 },
    style: { backgroundColor: "#ff5858" },
  },
  {
    name: "Science & nature",
    option: "Science & nature",
    image: { uri: "./src/assets/Science&Nature_Icon.svg", offsetY: 160 },
    style: { backgroundColor: "#557aff" },
  },
  {
    name: "Geography",
    option: "Geography",
    image: { uri: "./src/assets/Geography_Icon.svg", offsetY: 160 },
    style: { backgroundColor: "#ffe663" },
  },
  {
    name: "History",
    option: "History",
    image: { uri: "./src/assets/History_Icon.svg", offsetY: 160 },
    style: { backgroundColor: "#68e4ff" },
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
          spinDuration={0.6}
        />
        {showCat && (
          <div className="showSelectedCat">
            <img
              src={data[prizeNumber].image.uri}
              alt={data[prizeNumber].name}
            />
            <p>{data[prizeNumber].name}</p>
          </div>
        )}
        <button type="button" onClick={handleSpinClick}>
          Launch
        </button>
      </div>
    </div>
  );
}

export default SpinWheel;
