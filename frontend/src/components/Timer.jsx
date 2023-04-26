import React, { useState, useEffect } from "react";

function Timer() {
  const [tempsRestant, setTempsRestant] = useState(60);

  useEffect(() => {
    // Décrémente le temps restant toutes les secondes
    const interval = setInterval(() => {
      setTempsRestant((prevTempsRestant) =>
        prevTempsRestant > 0 ? prevTempsRestant - 1 : 0
      );
    }, 1000);

    // Nettoie l'intervalle lorsque le composant est démonté
    return () => clearInterval(interval);
  }, []);

  return <div>{tempsRestant} sec</div>;
}

export default Timer;
