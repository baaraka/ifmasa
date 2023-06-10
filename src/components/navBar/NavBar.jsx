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
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link">
              <span className="menuSpan">IFMASA LEADERSHIP</span>
            </Link>
            <Link className="link">
              <span className="menuSpan">IFMASA MEMBER'S PROFILE</span>
            </Link>
            <Link className="link">
              <span className="menuSpan">IFMASA NEW LETTERS</span>
            </Link>
            <Link className="link">
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
