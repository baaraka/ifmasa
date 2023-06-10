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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Recusandae, incidunt aliquid? Atque totam at doloremque non eos
            nobis iure minima, placeat excepturi reiciendis exercitationem animi
            nostrum officiis consectetur sit iusto. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Eum tempore hic deleniti atque saepe
            eligendi, aut provident. Similique officia quia possimus. Illum
            magni dolorem impedit id nesciunt quidem unde quas.
          </p>
          <button>READ MORE</button>
        </div>
      </div>
    </div>
  );
}

export default About;
