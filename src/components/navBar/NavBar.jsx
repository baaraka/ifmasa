import { Link } from "react-router-dom";
import "./NavBar.scss";
import { useState } from "react";

function NavBar() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  const handleSideBarClose = () => {
    setOpen(false);
  };

  return (
    <div className="navBar">
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
          <div className="other" onClick={() => setShow(!show)}>
            <Link to="/contactUs" className="link">
              <span>Others</span>
            </Link>
            <i
              className={`iconDropMenu fa-solid  ${
                show ? "fa-chevron-up" : "fa-chevron-down"
              }`}
            ></i>
          </div>
        </div>
        {show && (
          <div className="dropDownMenu">
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
        )}
        <div className="toggleMenu">
          <i
            onClick={() => setOpen(!open)}
            className={`iconBars fa-solid ${open ? "fa-xmark" : "fa-bars"}`}
          ></i>
        </div>
        {open && (
          <div className="sideBar">
            <Link to="/" className="link">
              <span onClick={handleSideBarClose}>Home</span>
            </Link>
            <Link to="/aboutUs" className="link">
              <span onClick={handleSideBarClose}>About Us</span>
            </Link>
            <Link to="/contactUs" className="link">
              <span onClick={handleSideBarClose}>Contact Us</span>
            </Link>
            <Link to="/leaders" className="link">
              <span onClick={handleSideBarClose} className="menuSpan">
                IFMASA LEADERSHIP
              </span>
            </Link>
            <Link to="/members" className="link">
              <span onClick={handleSideBarClose} className="menuSpan">
                IFMASA MEMBER'S PROFILE
              </span>
            </Link>
            <span onClick={handleSideBarClose} className="menuSpan">
              IFMASA NEWSLETTERS
            </span>
            <Link to="/products" className="link">
              <span onClick={handleSideBarClose} className="menuSpan">
                IFMASA PRODUCTS
              </span>
            </Link>
            <Link to="/signUp">
              <button
                onClick={handleSideBarClose}
                style={{
                  padding: "10px 20px",
                  border: "none",
                  fontSize: "15px",
                  color: "rgb(45, 183, 228)",
                }}
              >
                sign up
              </button>
            </Link>
            <Link to="/signIn">
              <button
                onClick={handleSideBarClose}
                style={{
                  padding: "10px 20px",
                  border: "none",
                  fontSize: "15px",
                  color: "white",
                  backgroundColor: "rgb(45, 183, 228)",
                }}
              >
                sign in
              </button>
            </Link>
          </div>
        )}
        <div className="right">
          <Link to="/signUp">
            <button className="bUp">sign up</button>
          </Link>
          <Link to="/signIn">
            <button className="bIn">sign in</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
