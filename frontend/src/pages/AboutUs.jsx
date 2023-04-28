import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="aboutUs">
      <div className="aboutText">
        <h1 className="about">About Us</h1>
        <p className="source">The bibliographic source of our website:</p>
        <p>
          <span>The title of the website: </span>QUIZILLA
        </p>
        <p>
          <span>The year of its publication: </span>2023
        </p>
        <p>
          <span>The URL address:</span> https://quizilla.netlify.app/
        </p>
        <p>
          <span>The Application Programming Interface (API) used.:</span>open
          Trivia
        </p>
      </div>
      <h2 className="title">The developers of the project</h2>
      <div className="author">
        <figure>
          <img src="/assets/cyrille.jpg" alt=" Cyrille" />
          <figcaption>
            <p>Cyrille</p>
          </figcaption>
        </figure>
        <figure>
          <img src="/assets/ante.jpg" alt=" Ante" />
          <figcaption>
            <p>Ante</p>
          </figcaption>
        </figure>
        <figure>
          <img src="/assets/alain.jpg" alt=" Alain" />
          <figcaption>
            <p>Alain</p>
          </figcaption>
        </figure>
        <figure>
          <img src="/assets/junior.jpg" alt=" Junior" />
          <figcaption>Junior</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default AboutUs;
