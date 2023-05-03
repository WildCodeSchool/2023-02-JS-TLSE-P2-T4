// eslint-disable-next-line import/no-extraneous-dependencies
import { Wheel } from "react-custom-roulette";
import "./SpinWheel.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function SpinWheel({
  categories,
  mustSpin,
  setMustSpin,
  prizeNumber,
  showCat,
  setShowCat,
  showModal,
}) {
  const { image, name, category } = categories[prizeNumber];

  return (
    <div className={showModal ? "modalSpinWheel" : "notModalSpinWheel"}>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={categories}
        onStopSpinning={() => {
          setMustSpin(false);
          setShowCat(true);
        }}
        spinDuration={0.6}
      />
      {showCat && (
        <>
          <div className="showSelectedCat">
            <img src={image.uri} alt={name} />
            <p>{name}</p>
          </div>
          <Link to="quiz" state={{ category }}>
            <button type="button">Start Quiz</button>
          </Link>
        </>
      )}
    </div>
  );
}

SpinWheel.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      category: PropTypes.number.isRequired,
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
  showModal: PropTypes.bool,
};
SpinWheel.defaultProps = {
  categories: [],
  mustSpin: false,
  setMustSpin: false,
  prizeNumber: 0,
  showCat: false,
  setShowCat: false,
  showModal: false,
};

export default SpinWheel;
