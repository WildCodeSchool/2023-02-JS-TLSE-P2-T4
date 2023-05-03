import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Timer() {
  const [time, setTime] = useState(60);
  const navigate = useNavigate();

  useEffect(() => {
    // Décrémente le temps restant toutes les secondes
    const interval = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      } else {
        clearInterval(interval);
        navigate("/gameboard");
      }
    }, 1000);

    // Nettoie l'intervalle lorsque le composant est démonté
    return () => clearInterval(interval);
  }, [time, navigate]);

  return <div>{time} sec</div>;
}

export default Timer;
