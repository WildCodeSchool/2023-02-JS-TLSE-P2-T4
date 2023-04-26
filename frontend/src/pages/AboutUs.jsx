import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="aboutUs">
      <h2 className="title">Les Realisateurs</h2>
      <div className="author">
        <figure>
          <img src="src/assets/photo1.jpg" alt=" Cyrille" />
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
          <img src="src/assets/juju.jpg" alt=" Junior" />
          <figcaption>Junior</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default AboutUs;
