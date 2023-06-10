import { Link } from "react-router-dom";
import "./NavBar.scss";

function NavBar() {
  return (
    <div className="navBar">
      <div className="navContainer">
        <div className="left">
          <h1>IFMASA</h1>
        </div>
        <div className="middle">
          <span>Home</span>
          <span>About Us</span>
          <span>Contact Us</span>
        </div>
        <div className="right">
          <button className="bUp">sign up</button>
          <button className="bIn">sign in</button>
        </div>
      </div>
      <hr />
      <div className="menu">
        <Link className="link">IFMASA LEADERSHIP</Link>
        <Link className="link">IFMASA MEMBER'S PROFILE</Link>
        <Link className="link">IFMASA NEW LETTERS</Link>
        <Link className="link">IFMASA PRODUCTS</Link>
      </div>
    </div>
  );
}

export default NavBar;
