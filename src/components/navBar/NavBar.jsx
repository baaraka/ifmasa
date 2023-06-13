import { Link, useLocation } from "react-router-dom";
import "./NavBar.scss";
import { useEffect, useState } from "react";

function NavBar() {
  const [active, setActive] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  return (
    <div className={active || pathname !== "/" ? "navBar active" : "navBar"}>
      <div className="navContainer">
        <div className="left">
          <Link to="/" className="link">
            <h1>IFMASA</h1>
          </Link>
        </div>
        <div className="middle">
          <Link to="/" className="link">
            <span>Home</span>
          </Link>
          <Link to="/aboutUs" className="link">
            <span>About Us</span>
          </Link>
          <Link to="/contactUs" className="link">
            <span>Contact Us</span>
          </Link>
        </div>
        <div className="right">
          <Link to="/signUp">
            <button className="bUp">sign up</button>
          </Link>
          <Link to="/signIn">
            <button className="bIn">sign in</button>
          </Link>
        </div>
        <div className="toggleMenu">
          <i class="iconBars fa-solid fa-bars"></i>
        </div>
        <div className="sideBar">
          <Link to="/" className="link">
            <span>Home</span>
          </Link>
          <Link to="/aboutUs" className="link">
            <span>About Us</span>
          </Link>
          <Link to="/contactUs" className="link">
            <span>Contact Us</span>
          </Link>
          <Link to="/leaders" className="link">
            <span className="menuSpan">IFMASA LEADERSHIP</span>
          </Link>
          <Link to="/members" className="link">
            <span className="menuSpan">IFMASA MEMBER'S PROFILE</span>
          </Link>
          <span className="menuSpan">IFMASA NEWSLETTERS</span>
          <Link to="/products" className="link">
            <span className="menuSpan">IFMASA PRODUCTS</span>
          </Link>
          <Link to="/signUp">
            <button className="bUp">sign up</button>
          </Link>
          <Link to="/signIn">
            <button className="bIn">sign in</button>
          </Link>
        </div>
      </div>

      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link to="/leaders" className="link">
              <span className="menuSpan">IFMASA LEADERSHIP</span>
            </Link>
            <Link to="/members" className="link">
              <span className="menuSpan">IFMASA MEMBER'S PROFILE</span>
            </Link>
            <span className="menuSpan">IFMASA NEWSLETTERS</span>
            <Link to="/products" className="link">
              <span className="menuSpan">IFMASA PRODUCTS</span>
            </Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
}

export default NavBar;
