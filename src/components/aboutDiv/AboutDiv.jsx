import "./AboutDiv.scss";

function AboutDiv() {
  return (
    <div className="about">
      <div className="aboutContainer">
        <div className="left">
          <img
            src="https://images.pexels.com/photos/14509144/pexels-photo-14509144.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt=""
          />
        </div>
        <div className="right">
          <h1>About Us</h1>
          <p>
            IFMASA (Academic State Assembly) is an esteemed organization
            comprising dedicated scholars from diverse disciplines within our
            university. Our mission is to unite students and faculty, fostering
            a collaborative and inclusive academic community. Through a range of
            initiatives, we aim to empower minds, inspire intellectual growth,
            and promote interdisciplinary exchange.
            <br />
            <br />
            Driven by the belief that knowledge knows no boundaries, IFMASA
            serves as a platform for sharing ideas, conducting research, and
            organizing events that enhance the academic experience. We strive to
            create an environment where individuals can develop critical
            thinking, leadership skills, and a strong sense of social
            responsibility.
            <br />
            <br />
            As an assembly of passionate scholars, we actively engage in
            fostering excellence, advocating for academic integrity, and
            cultivating a culture of innovation. Through our various committees
            and projects, we aim to bridge the gap between theory and practice,
            enabling students to apply their knowledge and skills to real-world
            challenges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutDiv;
