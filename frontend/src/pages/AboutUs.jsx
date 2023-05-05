import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="aboutUs">
      <div className="aboutUsTitle">
        <h1>About Us</h1>
        <p className="source">Game's Sources</p>
      </div>

      <div className="aboutText">
        <p>
          Title of the website : <span>QUIZILLA</span>
        </p>
        <p>
          Year of its publication : <span>2023</span>
        </p>
        <p>
          URL : <span>https://quizilla.netlify.app/</span>
        </p>
        <p>
          Credits to API (Application Programming Interface) :{" "}
          <span>openTriviadb</span>
        </p>
      </div>
      <div className="author">
        <h2 className="title">Team Members</h2>
        <div className="figures">
          {" "}
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
            <figcaption>Junior</figcaption>{" "}
          </figure>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
