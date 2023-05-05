import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Square from "../components/Square";
import SpinWheel from "../components/SpinWheel";
import { PositionSquare } from "../components/Utils";

import "./GameBoard.css";

const BoardGrid = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  gap: 12px;
  grid-template-columns: ${({ colMobile }) => `repeat(${colMobile}, 100px)`};
  grid-template-rows: ${({ rowMobile }) => `repeat(${rowMobile}, 100px)`};
  margin: 3% auto;
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
    width: ${({ width }) => (width ? "57%" : "40%")};
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
    image: {
      uri: "/assets/GeneralKnowledge_Icon.svg",
      offsetY: 160,
      coloredUri: "/assets/ColoredGeneralKnowledge_Icon.svg",
    },
    style: {
      backgroundColor: "#b260ce",
    },
  },
  {
    name: "Music",
    category: 12,
    option: "Music",
    image: {
      uri: "/assets/Music_Icon.svg",
      offsetY: 160,
      coloredUri: "/assets/ColoredMusic_Icon.svg",
    },
    style: { backgroundColor: "#ffa621" },
  },
  {
    name: "Video Games",
    category: 15,
    option: "Video Games",
    image: {
      uri: "/assets/VideoGames_Icon.svg",
      offsetY: 160,
      coloredUri: "/assets/ColoredVideoGames_Icon.svg",
    },
    style: { backgroundColor: "#ff5858" },
  },
  {
    name: "Science & nature",
    category: 17,
    option: "Science & nature",
    image: {
      uri: "/assets/Science&Nature_Icon.svg",
      offsetY: 160,
      coloredUri: "/assets/ColoredScience&Nature_Icon.svg",
    },
    style: { backgroundColor: "#557aff" },
  },
  {
    name: "Geography",
    category: 22,
    option: "Geography",
    image: {
      uri: "/assets/Geography_Icon.svg",
      offsetY: 160,
      coloredUri: "/assets/ColoredGeography_Icon.svg",
    },
    style: { backgroundColor: "#ffe663" },
  },
  {
    name: "History",
    category: 23,
    option: "History",
    image: {
      uri: "/assets/History_Icon.svg",
      offsetY: 160,
      coloredUri: "/assets/ColoredHistory_Icon.svg",
    },
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
  prizeNumber,
  setPrizeNumber,
  valueSquare,
  setValueSquare,
  buttonBoard,
  setButtonBoard,
}) {
  const navigate = useNavigate();
  const [mustSpin, setMustSpin] = useState(false);
  const [showCat, setShowCat] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const width = "true";

  useEffect(() => {
    if (roundValid && roundEnd && currentPosition === 14) {
      setTotalScore(totalScore + currentScore);
      setRoundEnd(false);
      setRoundValid(false);
      setValueSquare([...valueSquare, categories[prizeNumber]]);
      setCurrentPosition(currentPosition + 1);
      setButtonBoard(1);
    } else if (roundValid && roundEnd) {
      setTotalScore(totalScore + currentScore);
      setRoundEnd(false);
      setRoundValid(false);
      setValueSquare([...valueSquare, categories[prizeNumber]]);
      setCurrentPosition(currentPosition + 1);
      if (currentPosition === 4 || currentPosition === 9) {
        setLife(life + 1);
      }
    } else if (roundEnd && !roundValid && life > 0) {
      setTotalScore(totalScore + currentScore);
      setLife(life - 1);
      setRoundEnd(false);
    } else if (roundEnd && life <= 0) {
      setTotalScore(totalScore + currentScore);
      setRoundEnd(false);
      setButtonBoard(2);
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
        <div className="labelTotalScore">
          Total Score <span className="totalScoreNumb">{totalScore}</span>
        </div>
        <div className="labelLife">{life}</div>
      </div>
      <div>
        <BoardGrid colMobile={3} rowMobile={7} colDesk={7} rowDesk={4}>
          {PositionSquare.map((el) => {
            return (
              <Square
                key={el.id}
                id={el.id}
                positionColMobile={el.YM}
                positionRowMobile={el.XM}
                positionColDesk={el.YD}
                positionRowDesk={el.XD}
                categories={categories}
                prizeNumber={prizeNumber}
                roundValid={roundValid}
                currentPosition={currentPosition}
                valueSquare={valueSquare}
              />
            );
          })}
          {!buttonBoard ? (
            <LaunchButton onClick={handleSpinClick}>Launch</LaunchButton>
          ) : (
            <LaunchButton
              width={width}
              onClick={() => navigate(buttonBoard === 1 ? "/winner" : "/loser")}
            >
              {buttonBoard === 1 ? "Winner Results" : "Loser Results"}
            </LaunchButton>
          )}
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
  prizeNumber: PropTypes.number.isRequired,
  setPrizeNumber: PropTypes.func.isRequired,
  valueSquare: PropTypes.arrayOf(PropTypes.shape).isRequired,
  setValueSquare: PropTypes.func.isRequired,
  buttonBoard: PropTypes.number.isRequired,
  setButtonBoard: PropTypes.func.isRequired,
};

export default GameBoard;
