import { Link } from "react-router-dom";
import "./About.scss";

function About() {
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
          </p>
          <Link to="/aboutUs" className="link">
            <button>READ MORE</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
