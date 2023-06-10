import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="left">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            possimus, sapiente reprehenderit animi suscipit voluptatum dolore,
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            voluptas perferendis aliquid autem ipsum reiciendis amet pariatur
            vero, dolor laboriosam, quia deleniti, qui sint? Odit blanditiis
            esse soluta consectetur similique?
          </p>
        </div>
        <div className="right">
          <img
            src="https://images.pexels.com/photos/4560148/pexels-photo-4560148.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
