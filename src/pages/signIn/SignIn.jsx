import React from "react";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="signUp">
      <div className="signUpContainer">
        <div className="left">
          <img
            src="https://images.pexels.com/photos/4560142/pexels-photo-4560142.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt=""
          />
        </div>
        <div className="right">
          <form>
            <div className="labelDiv">
              <label>Username</label>
              <input type="text" />
            </div>
            <div className="labelDiv">
              <label>Password</label>
              <input type="password" />
            </div>
            <button>Sign In</button>
            <p>
              You don't have account?{" "}
              <Link to="/signUp">
                <button>Sign Up</button>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
