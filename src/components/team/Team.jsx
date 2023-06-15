import "./Team.scss";

function Team() {
  return (
    <div className="team">
      <div className="teamContainer">
        <div className="left">
          <h1>Our Team</h1>
          <p>
            Join us on this journey of intellectual exploration, collaboration,
            and personal growth. Together, we can make a lasting impact within
            our university and beyond."
          </p>
        </div>
        <div className="right">
          <img
            src="https://images.pexels.com/photos/5553080/pexels-photo-5553080.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Team;
