import React from "react";

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
            <button>SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
