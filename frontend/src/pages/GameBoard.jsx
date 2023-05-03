import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Square from "../components/Square";
import SpinWheel from "../components/SpinWheel";
import "./GameBoard.css";

const BoardGrid = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  gap: 12px;
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
  position: fixed;
  width: 100%;
  bottom: 0;
  background-color: black;
  border-radius: 0px;
  border: none;
  border: 3px solid rgba(255, 255, 255, 0.2);
  &:hover,
  :focus,
  :active {
    border-color: var(--secondary-color);
    color: var(--secondary-color);
  }

  @media (min-width: 768px) {
    position: initial;
    border-radius: 50px;
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
    category: 9,
    option: "General Knowledge",
    image: { uri: "/assets/GeneralKnowledge_Icon.svg", offsetY: 160 },
    style: {
      backgroundColor: "#b260ce",
    },
  },
  {
    name: "Music",
    category: 12,
    option: "Music",
    image: { uri: "/assets/Music_Icon.svg", offsetY: 160 },
    style: { backgroundColor: "#ffa621" },
  },
  {
    name: "Video Games",
    category: 15,
    option: "Video Games",
    image: { uri: "/assets/VideoGames_Icon.svg", offsetY: 160 },
    style: { backgroundColor: "#ff5858" },
  },
  {
    name: "Science & nature",
    category: 17,
    option: "Science & nature",
    image: { uri: "/assets/Science&Nature_Icon.svg", offsetY: 160 },
    style: { backgroundColor: "#557aff" },
  },
  {
    name: "Geography",
    category: 22,
    option: "Geography",
    image: { uri: "/assets/Geography_Icon.svg", offsetY: 160 },
    style: { backgroundColor: "#ffe663" },
  },
  {
    name: "History",
    category: 23,
    option: "History",
    image: { uri: "/assets/History_Icon.svg", offsetY: 160 },
    style: { backgroundColor: "#68e4ff" },
  },
];

function GameBoard({
  totalScore,
  setTotalScore,
  currentScore,
  setCurrentScore,
  roundEnd,
  setRoundEnd,
  roundValid,
  setRoundValid,
  currentPosition,
  setCurrentPosition,
  life,
  setLife,
}) {
  const navigate = useNavigate();
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [showCat, setShowCat] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!roundValid && !roundEnd && currentPosition === 16) {
      navigate("/winner");
    } else if (roundValid && roundEnd) {
      setTotalScore(totalScore + currentScore);
      setRoundEnd(false);
      setRoundValid(false);
      setCurrentPosition(currentPosition + 1);
    } else if (roundEnd && !roundValid && life > 0) {
      setTotalScore(totalScore + currentScore);
      setLife(life - 1);
      setRoundEnd(false);
    } else if (roundEnd && life <= 0) {
      setTotalScore(totalScore + currentScore);
      setRoundEnd(false);
      navigate("/loser");
    }
  }, [roundEnd]);

  // Permet de lancer la roue
  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * categories.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      setShowCat(false);
      setShowModal(true);
      setCurrentScore(0);
      setRoundEnd(false);
      setRoundValid(false);
    }
  };

  return (
    <div>
      <div className="labelTotalScoreLife">
        <div className="labelTotalScore">Total Score {totalScore}</div>
        <div className="labelLife">{life}</div>
      </div>
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
          showModal={showModal}
        />
      </div>
    </div>
  );
}

GameBoard.propTypes = {
  totalScore: PropTypes.number.isRequired,
  setTotalScore: PropTypes.func.isRequired,
  currentScore: PropTypes.number.isRequired,
  setCurrentScore: PropTypes.func.isRequired,
  roundEnd: PropTypes.bool.isRequired,
  setRoundEnd: PropTypes.func.isRequired,
  roundValid: PropTypes.bool.isRequired,
  setRoundValid: PropTypes.func.isRequired,
  currentPosition: PropTypes.number.isRequired,
  setCurrentPosition: PropTypes.func.isRequired,
  life: PropTypes.number.isRequired,
  setLife: PropTypes.func.isRequired,
};

export default GameBoard;
