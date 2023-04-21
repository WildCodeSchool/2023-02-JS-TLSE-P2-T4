// eslint-disable-next-line import/no-extraneous-dependencies
import { Wheel } from "react-custom-roulette";
import "./SpinWheel.css";
import PropTypes from "prop-types";

function SpinWheel({
  data,
  mustSpin,
  setMustSpin,
  prizeNumber,
  showCat,
  setShowCat,
  handleSpinClick,
  showModal,
}) {
  SpinWheel.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        option: PropTypes.string.isRequired,
        image: PropTypes.shape({
          offsetY: PropTypes.number.isRequired,
          uri: PropTypes.string.isRequired,
        }).isRequired,
        style: PropTypes.shape({
          backgroundColor: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired
    ),
    mustSpin: PropTypes.bool,
    setMustSpin: PropTypes.func,
    prizeNumber: PropTypes.number,
    showCat: PropTypes.bool,
    setShowCat: PropTypes.func,
    handleSpinClick: PropTypes.func,
    showModal: PropTypes.bool,
  };
  SpinWheel.defaultProps = {
    data: [],
    mustSpin: false,
    setMustSpin: false,
    prizeNumber: 0,
    showCat: false,
    setShowCat: false,
    handleSpinClick: 0,
    showModal: false,
  };

  const { image, name } = data[prizeNumber];

  return (
    <div className={showModal ? "modalSpinWheel" : "notModalSpinWheel"}>
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
          <img src={image.uri} alt={name} />
          <p>{name}</p>
        </div>
      )}
      <button type="button" onClick={handleSpinClick}>
        Start Quiz
      </button>
    </div>
  );
}

export default SpinWheel;
