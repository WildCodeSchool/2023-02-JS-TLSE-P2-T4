import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function Timer({ setRoundEnd, selectedTimer }) {
  const [time, setTime] = useState(selectedTimer.valueT);
  const navigate = useNavigate();

  useEffect(() => {
    // Décrémente le temps restant toutes les secondes
    const interval = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      } else {
        clearInterval(interval);
        setRoundEnd(true);
        navigate("/gameboard");
      }
    }, 1000);

    // Nettoie l'intervalle lorsque le composant est démonté
    return () => clearInterval(interval);
  }, [time, navigate]);

  return <div>{time} sec</div>;
}

Timer.propTypes = {
  selectedTimer: PropTypes.objectOf(PropTypes.number).isRequired,
  setRoundEnd: PropTypes.func.isRequired,
};

export default Timer;
