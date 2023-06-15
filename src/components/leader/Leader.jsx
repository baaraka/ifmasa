import { Link } from "react-router-dom";
import "./Leader.scss";

function Leader() {
  return (
    <div className="leader">
      <div className="leaderContainer">
        <h1>IFMASA LEADERSHIP</h1>
        <div className="lContainer">
          <div className="lContainerList">
            <h2>Leadership Development</h2>
            <p>
              Our IFMASA leaders are committed to fostering leadership skills
              among students. Through workshops, seminars, and mentoring
              programs, we provide opportunities for personal and professional
              growth, enabling individuals to become effective leaders in their
              academic and professional pursuits.
            </p>
          </div>
          <div className="lContainerList">
            <h2>Academic Excellence</h2>
            <p>
              We prioritize academic excellence by encouraging a culture of
              intellectual curiosity, critical thinking, and scholarly pursuits.
              Our leaders facilitate academic support systems, such as study
              groups, research symposiums, and resource sharing, to enhance
              learning outcomes and promote a high standard of academic
              achievement.
            </p>
          </div>
          <div className="lContainerList">
            <h2>Interdisciplinary Collaboration</h2>
            <p>
              Recognizing the value of interdisciplinary collaboration, our
              leaders actively promote cross-disciplinary initiatives. We
              encourage students from different academic backgrounds to come
              together, exchange ideas, and collaborate on projects that address
              complex real-world challenges from a multidimensional perspective.
            </p>
          </div>
          <div className="lContainerList">
            <h2>Community Engagement</h2>
            <p>
              IFMASA leaders understand the importance of community engagement.
              We organize outreach programs, community service projects, and
              initiatives that contribute positively to society. By connecting
              academia with the wider community, we strive to create a
              meaningful impact and foster a sense of social responsibility
              among our members.
            </p>
          </div>
          <div className="lContainerList">
            <h2>Networking and Professional Development</h2>
            <p>
              We focus on facilitating networking opportunities and professional
              development for our members. Through career fairs, guest lectures,
              and industry partnerships, we create platforms for students to
              connect with professionals, gain insights into various career
              paths, and enhance their employability skills
            </p>
          </div>
          <div className="lContainerList">
            <h2>Research and Innovation</h2>
            <p>
              IFMASA leaders encourage and support research and innovation among
              students. We organize research forums, provide resources for
              research projects, and promote a culture of curiosity and
              creativity. Our aim is to foster a spirit of innovation, pushing
              the boundaries of knowledge within our university.
            </p>
          </div>
        </div>
        <Link to="/leaders" className="link">
          <button>VIEW MORE</button>
        </Link>
      </div>
    </div>
  );
}

export default Leader;
