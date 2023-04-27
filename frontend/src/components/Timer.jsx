import React, { useState, useEffect } from "react";

function Timer() {
  const [Time, setTime] = useState(60);

  useEffect(() => {
    // Décrémente le temps restant toutes les secondes
    const interval = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    // Nettoie l'intervalle lorsque le composant est démonté
    return () => clearInterval(interval);
  }, []);

  return <div>{Time} sec</div>;
}

export default Timer;
