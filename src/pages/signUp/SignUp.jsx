import { Link } from "react-router-dom";
import "./SignUp.scss";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navBar/NavBar";
import { useState } from "react";

function SignUp() {
  const [signupStatus, setSignupStatus] = useState(""); // State variable to track signup status

  const handleSignUp = (event) => {
    event.preventDefault();

    // Get form values
    const username = event.target.elements.username.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    const phoneNumber = event.target.elements.phoneNumber.value;

    // Create user object
    const user = {
      username: username,
      email: email,
      password: password,
      phoneNumber: phoneNumber,
    };

    // Retrieve existing users from localStorage or initialize an empty array
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if user with the same email already exists
    const existingUser = users.find((user) => user.email === email);

    if (existingUser) {
      setSignupStatus("failure"); // Set signup status to failure
      setTimeout(() => {
        setSignupStatus(""); // Clear signup status after 2 seconds
      }, 2000);
    } else {
      // Add the new user to the array
      users.push(user);

      // Store updated user data in localStorage
      localStorage.setItem("users", JSON.stringify(users));

      setSignupStatus("success"); // Set signup status to success
      setTimeout(() => {
        setSignupStatus(""); // Clear signup status after 2 seconds
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
            <form onSubmit={handleSignUp}>
              <div className="labelDiv">
                <label>Username</label>
                <input type="text" name="username" required />
              </div>
              <div className="labelDiv">
                <label>Email</label>
                <input type="email" name="email" required />
              </div>
              <div className="labelDiv">
                <label>Password</label>
                <input type="password" name="password" required />
              </div>
              <div className="labelDiv">
                <label>Phone Number</label>
                <input type="number" name="phoneNumber" required />
              </div>
              <button type="submit">Sign Up</button>
              {signupStatus === "success" && <p>Sign up successful!</p>}
              {signupStatus === "failure" && (
                <p>Email already exists. Please use a different email.</p>
              )}
              <p>
                Already have an account?{" "}
                <Link to="/signIn">
                  <button type="submit">Sign In</button>
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

export default SignUp;
