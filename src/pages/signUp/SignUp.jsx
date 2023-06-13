import { Link } from "react-router-dom";
import "./SignUp.scss";

function SignUp() {
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
              <label>Email</label>
              <input type="email" />
            </div>
            <div className="labelDiv">
              <label>Password</label>
              <input type="password" />
            </div>
            <div className="labelDiv">
              <label>Phone Number</label>
              <input type="number" />
            </div>
            <button>Sign Up</button>
            <p>
              You have account?{" "}
              <Link to="/signIn">
                <button>Sign In</button>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
