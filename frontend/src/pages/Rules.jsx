import "./Rules.css";

function Rules() {
  return (
    <div className="rules">
      <div className="rule">
        <h1>The rules of your quizilla game </h1>
        <h2>Quiz game rules</h2>
      </div>
      <div className="quizilla">
        <h3 className="langage">in english</h3>
        <p className="godzillas">
          <span>Number of players:</span> 1 <br />
          <span>player Objective:</span>
          Browse the game board by correctly answering the quiz questions to
          reach the exit.
          <br />
          <span>Rules of the game :</span> 1.
          <br /> Click "Start" to access the game board. <br />
          2. Launch the wheel by clicking on the "Launch" button. The wheel will
          select a random quiz topic for the current box.
          <br />{" "}
          <p>
            3. Once the theme is selected, a timed quiz will appear. Answer the
            questions correctly to validate the theme according to the score. If
            you answer several questions correctly in a row, your score will
            increase faster.
          </p>
          <br /> 4. If you answer correctly, the box will color according to the
          theme and you can move on to the next box. If you answer incorrectly,
          you will be returned to square one. However, a joker is available
          during the game to change a question.
          <br /> 5. Keep moving through the maze answering the quizzes correctly
          until you reach the exit. 6. You have won when you reach the exit.
          <br /> <br />
          <span className="fun">Good luck and have fun!</span>
        </p>
        <p>
          <h3 className="langage">En français</h3>
          <p className="godzillas">
            <span>Titre du jeu :</span> Quizilla <br />
            <span>nombre de joueurs:</span> 1 <br />
            <span>joueur Objectif :</span> Parcourir le plateau de jeu en
            répondant répondant correctement aux questions de quiz pour
            atteindre la sortie.
            <br /> Règles du jeu 1:
            <br />
            Cliquez sur "Commencer" pour acceder au plateau de jeu.
            <br />
            2. Lancer la roue en cliquant sur le bouton "Lancer". La roue
            sélectionnera un thème de quiz au hazard pour la case en cours.
            <br />
            <p>
              3. Une fois le thème sélectionné, un quiz chronométré apparaîtra.
              Répondez correctement aux questions pour valider le thème en
              fonction du score. Si vous répondez correctement à plusieurs
              questions d'affilée, votre score augmentera plus rapidement.
            </p>
            <br />
            <p>
              4. Si vous répondez correctement, la case se colorera en fonction
              du thème et vous pourrez passer à la case suivante. Si vous
              répondez incorrectement, vous retournerez à la case depart.
              Cependant, un joker est disponible en cours de jeu pour changer
              une question. Continuez à avancer à travers le labyrinthe en
              repondant correctement aux quiz jusqu'à atteindre la sortie.
            </p>
            <br /> 6. Vous avez gagné lorsque vous atteignez la sortie. <br />
            <span className="fun">Bonne chance et amuser-vous bien !</span>
          </p>
        </p>
      </div>
    </div>
  );
}

export default Rules;
