import React, { Component } from "react";
import PropTypes from "prop-types";

class LoginSignUp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="div-body">
        <div className="container">
          <div className="frame">
            <div className="nav">
              <ul className="links">
                <li className="signin-active">
                  <a className="btn">Log In</a>
                </li>
                <li className="signup-inactive">
                  <a className="btn">Sing Up</a>
                </li>
              </ul>
            </div>
            <div ng-app ng-init="checked = false">
              <form className="form-signin" action method="post" name="form">
                {/* <label htmlFor="fullname">Full name</label> */}
                {/* <input
                  className="form-styling"
                  type="text"
                  name="username"
                  placeholder
                /> */}
                {/* <label htmlFor="dlno">email</label> */}
                <input
                  className="form-styling"
                  type="text"
                  name="name"
                  placeholder = "Enter your email address"
                />
                {/* <label htmlFor="password">Password</label> */}
                <input
                  className="form-styling"
                  type="text"
                  name="password"
                  placeholder = "Enter your password"
                />
                <input type="checkbox" id="checkbox" />
                <label htmlFor="checkbox">
                  <span className="ui" />
                  <span className="text-dark">Keep me signed in</span>
                </label>
                <div className="btn-animate">
                  <a className="btn-signin">Login to your account</a>
                </div>
              </form>
              <form className="form-signup" action method="post" name="form">
                {/* <label htmlFor="fname">First name</label> */}
                <input
                  className="form-styling"
                  type="text"
                  name="fname"
                  placeholder = "Enter your first name"
                />
                {/* <label htmlFor="lname">Last Name</label> */}
                <input
                  className="form-styling"
                  type="text"
                  name="lname"
                  placeholder ="Enter your last name"
                />
                {/* <label htmlFor="email">Email</label> */}
                <input
                  className="form-styling"
                  type="text"
                  name="email"
                  placeholder = "Enter your email address"
                />
                {/* <label htmlFor="password">Create password</label> */}
                <input
                  className="form-styling"
                  type="text"
                  name="password"
                  placeholder ="Enter your password"
                />
                <a ng-click="checked = !checked" className="btn-signup">
                  REGISTER
                </a>
              </form>
              <div className="success">
                <svg
                  width={270}
                  height={270}
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 60 60"
                  id="check"
                  ng-class="checked ? 'checked' : ''"
                >
                  <path
                    fill="#ffffff"
                    d="M40.61,23.03L26.67,36.97L13.495,23.788c-1.146-1.147-1.359-2.936-0.504-4.314 c3.894-6.28,11.169-10.243,19.283-9.348c9.258,1.021,16.694,8.542,17.622,17.81c1.232,12.295-8.683,22.607-20.849,22.042 c-9.9-0.46-18.128-8.344-18.972-18.218c-0.292-3.416,0.276-6.673,1.51-9.578"
                  />
                </svg>
                <div className="successtext">
                  <p>
                    New User registered, Kindly check your email for
                    confirmation.
                  </p>
                </div>
              </div>
            </div>
            <div className="forgot">
              <a href="#">Forgot your password?</a>
            </div>
            <div className="social-container">
            <p className="mb-3 mt-2"><span> Or Continue with</span></p>
            <div className="icon-container">
              <div className="icon"><img src="data:image/jpeg;base64,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" alt="" /></div>
              <div className="icon"><img src="data:image/png;base64,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" alt="" /></div>
              <div className="icon"><img src="data:image/png;base64,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" alt="" /></div>
            </div>
            </div>
            <div>
              <div className="cover-photo" />
              <div className="profile-photo" />
              <h1 className="welcome">Welcome,User</h1>
              <a className="btn-goback" value="Refresh" onclick="history.go()">
                Go back
              </a>
            </div>
          </div>
          <a id="refresh" value="Refresh" onclick="history.go()">
            <svg
              className="refreshicon"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              width="25px"
              height="25px"
              viewBox="0 0 322.447 322.447"
              style={{ enableBackground: "new 0 0 322.447 322.447" }}
              xmlSpace="preserve"
            >
              <path d="M321.832,230.327c-2.133-6.565-9.184-10.154-15.75-8.025l-16.254,5.281C299.785,206.991,305,184.347,305,161.224 c0-84.089-68.41-152.5-152.5-152.5C68.411,8.724,0,77.135,0,161.224s68.411,152.5,152.5,152.5c6.903,0,12.5-5.597,12.5-12.5 c0-6.902-5.597-12.5-12.5-12.5c-70.304,0-127.5-57.195-127.5-127.5c0-70.304,57.196-127.5,127.5-127.5 c70.305,0,127.5,57.196,127.5,127.5c0,19.372-4.371,38.337-12.723,55.568l-5.553-17.096c-2.133-6.564-9.186-10.156-15.75-8.025 c-6.566,2.134-10.16,9.186-8.027,15.751l14.74,45.368c1.715,5.283,6.615,8.642,11.885,8.642c1.279,0,2.582-0.198,3.865-0.614 l45.369-14.738C320.371,243.946,323.965,236.895,321.832,230.327z" />
            </svg>
          </a>
        </div>
      </div>
    );
  }
}
export default LoginSignUp;