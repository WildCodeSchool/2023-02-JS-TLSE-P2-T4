import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="aboutUs">
      <div className="fizzilla">
        <h1 className="about">About Us</h1>
        <p className="source">
          La source bibliographique de notre site Internet :
        </p>
        <p>
          <span>Le titre du site Internet: </span>QUIZILLA
        </p>
        <p>
          <span>L’annee de sa publication: </span>2023
        </p>
        <p>
          <span>L’adresse URL:</span> https://quizilla.netlify.app/
        </p>
        <p>
          <span>L'Application programming interface API utilisee:</span> API
          Trivia
        </p>
      </div>
      <h2 className="title">Les Realisateurs</h2>
      <div className="author">
        <figure>
          <img src="src/assets/cyrille.jpg" alt=" Cyrille" />
          <figcaption>
            <p>Cyrille</p>
          </figcaption>
        </figure>
        <figure>
          <img src="src/assets/ante.jpg" alt=" Ante" />
          <figcaption>
            <p>Ante</p>
          </figcaption>
        </figure>
        <figure>
          <img src="src/assets/alain.jpg" alt=" Alain" />
          <figcaption>
            <p>Alain</p>
          </figcaption>
        </figure>
        <figure>
          <img src="src/assets/junior.jpg" alt=" Junior" />
          <figcaption>Junior</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default AboutUs;
