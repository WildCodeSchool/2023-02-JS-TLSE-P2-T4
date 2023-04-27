import styled from "styled-components";
import { useState } from "react";
import PropTypes from "prop-types";
import Square from "../components/Square";
import SpinWheel from "../components/SpinWheel";
import "./GameBoard.css";

const BoardGrid = styled.div`
  display: grid;
  gap: 8px;
  grid-template-columns: ${({ colMobile }) => `repeat(${colMobile}, 100px)`};
  grid-template-rows: ${({ rowMobile }) => `repeat(${rowMobile}, 100px)`};
  margin: 8% auto;
  justify-content: center;

  @media (min-width: 768px) {
    gap: 16px;
    grid-template-columns: ${({ colDesk }) => `repeat(${colDesk}, 160px)`};
    grid-template-rows: ${({ rowDesk }) => `repeat(${rowDesk}, 160px)`};
  }
`;

const LaunchButton = styled.button`
  @media (min-width: 768px) {
    grid-area: 2/3/4/6;
    align-self: center;
    margin: 0 auto;
    width: 40%;
    height: 8%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2.4rem;
    gap: 1.6rem;
    font-size: 1.8rem;
  }
`;

const categories = [
  {
    name: "General Knowledge",
    option: "General Knowledge",
    image: { uri: "/assets/GeneralKnowledge_Icon.svg", offsetY: 160 },
    style: {
      backgroundColor: "#b260ce",
    },
  },
  {
    name: "Music",
    option: "Music",
    image: { uri: "/assets/Music_Icon.svg", offsetY: 160 },
    style: { backgroundColor: "#ffa621" },
  },
  {
    name: "Video Games",
    option: "Video Games",
    image: { uri: "/assets/VideoGames_Icon.svg", offsetY: 160 },
    style: { backgroundColor: "#ff5858" },
  },
  {
    name: "Science & nature",
    option: "Science & nature",
    image: { uri: "/assets/Science&Nature_Icon.svg", offsetY: 160 },
    style: { backgroundColor: "#557aff" },
  },
  {
    name: "Geography",
    option: "Geography",
    image: { uri: "/assets/Geography_Icon.svg", offsetY: 160 },
    style: { backgroundColor: "#ffe663" },
  },
  {
    name: "History",
    option: "History",
    image: { uri: "/assets/History_Icon.svg", offsetY: 160 },
    style: { backgroundColor: "#68e4ff" },
  },
];

function GameBoard({ selectedTimer, selectedDifficulty }) {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [showCat, setShowCat] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * categories.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      setShowCat(false);
      setShowModal(true);
    }
  };
  return (
    <div>
      <BoardGrid colMobile={3} rowMobile={7} colDesk={7} rowDesk={4}>
        <Square
          positionColMobile={1}
          positionRowMobile={1}
          positionColDesk={1}
          positionRowDesk={1}
        />
        <Square
          positionColMobile={2}
          positionRowMobile={1}
          positionColDesk={2}
          positionRowDesk={1}
        />
        <Square
          positionColMobile={3}
          positionRowMobile={1}
          positionColDesk={3}
          positionRowDesk={1}
        />
        <Square
          positionColMobile={3}
          positionRowMobile={2}
          positionColDesk={4}
          positionRowDesk={1}
        />
        <Square
          positionColMobile={3}
          positionRowMobile={3}
          positionColDesk={5}
          positionRowDesk={1}
        />
        <Square
          positionColMobile={2}
          positionRowMobile={3}
          positionColDesk={6}
          positionRowDesk={1}
        />
        <Square
          positionColMobile={1}
          positionRowMobile={3}
          positionColDesk={7}
          positionRowDesk={1}
        />
        <Square
          positionColMobile={1}
          positionRowMobile={4}
          positionColDesk={7}
          positionRowDesk={2}
        />
        <Square
          positionColMobile={1}
          positionRowMobile={5}
          positionColDesk={7}
          positionRowDesk={3}
        />
        <Square
          positionColMobile={2}
          positionRowMobile={5}
          positionColDesk={7}
          positionRowDesk={4}
        />
        <Square
          positionColMobile={3}
          positionRowMobile={5}
          positionColDesk={6}
          positionRowDesk={4}
        />
        <Square
          positionColMobile={3}
          positionRowMobile={6}
          positionColDesk={5}
          positionRowDesk={4}
        />
        <Square
          positionColMobile={3}
          positionRowMobile={7}
          positionColDesk={4}
          positionRowDesk={4}
        />
        <Square
          positionColMobile={2}
          positionRowMobile={7}
          positionColDesk={3}
          positionRowDesk={4}
        />
        <Square
          positionColMobile={1}
          positionRowMobile={7}
          positionColDesk={2}
          positionRowDesk={4}
        />
        <LaunchButton onClick={handleSpinClick}>Launch</LaunchButton>
      </BoardGrid>
      <SpinWheel
        categories={categories}
        mustSpin={mustSpin}
        setMustSpin={setMustSpin}
        prizeNumber={prizeNumber}
        showCat={showCat}
        setShowCat={setShowCat}
        handleSpinClick={handleSpinClick}
        showModal={showModal}
        selectedTimer={selectedTimer}
        selectedDifficulty={selectedDifficulty}
      />
    </div>
  );
}

GameBoard.propTypes = {
  selectedTimer: PropTypes.objectOf(PropTypes.number),
  selectedDifficulty: PropTypes.objectOf(PropTypes.string),
};

GameBoard.defaultProps = {
  selectedTimer: { valueT: 60 },
  selectedDifficulty: { valueD: "Easy" },
};

export default GameBoard;
