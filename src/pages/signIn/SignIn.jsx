import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";

function SignIn() {
  const [loginStatus, setLoginStatus] = useState("");

  const handleSignIn = (event) => {
    event.preventDefault();

    // Get form values
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;

    // Retrieve user data from localStorage
    const user = JSON.parse(localStorage.getItem("user"));

    // Check if user exists and credentials match
    if (user && user.username === username && user.password === password) {
      // Perform login actions (e.g., set authentication status, redirect, etc.)
      setLoginStatus("success");
      setTimeout(() => {
        setLoginStatus(""); // Clear login status after 2 seconds
      }, 2000);
    } else {
      setLoginStatus("failure");
      setTimeout(() => {
        setLoginStatus(""); // Clear login status after 2 seconds
      }, 2000);
    }

    // Clear form values
    event.target.reset();
  };
  return (
    <>
      <NavBar />
      <div className="signUp">
        <div className="signUpContainer">
          <div className="left">
            <img
              src="https://images.pexels.com/photos/4560142/pexels-photo-4560142.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={handleSignIn}>
              <div className="labelDiv">
                <label>Username</label>
                <input type="text" name="username" required />
              </div>
              <div className="labelDiv">
                <label>Password</label>
                <input type="password" name="password" required />
              </div>
              <button type="submit">Sign In</button>
              {loginStatus === "success" && <p>Login successful!</p>}
              {loginStatus === "failure" && (
                <p>Invalid email or password. Please try again.</p>
              )}
              <p>
                Don't have an account?{" "}
                <Link to="/signUp">
                  <button type="submit">Sign Up</button>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignIn;
