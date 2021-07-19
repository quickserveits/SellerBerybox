import React, { useEffect, useContext, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfiq";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
// import logInImg from "../../images/logIn.png";
import { useForm } from "react-hook-form";
import "./LogIn.css";
// import "bootstrap/dist/css/bootstrap.min.css";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const LogIn = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const [newUser, setNewUser] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    //create new account of email and password
    if (newUser) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password)
        .then((response) => {
          const newUserInfo = { ...loggedInUser };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setLoggedInUser(newUserInfo);
          updateUserInfo(loggedInUser.name);
        })
        .catch((error) => {
          const errorMessage = error.message;
          const newUserInfo = { ...loggedInUser };
          newUserInfo.error = errorMessage;
          newUserInfo.success = false;
          setLoggedInUser(newUserInfo);
        });
    }

    //sing in with email and password
    if (!newUser) {
      firebase
        .auth()
        .signInWithEmailAndPassword(data.email, data.password)
        .then((response) => {
          const newUserInfo = { ...loggedInUser };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setLoggedInUser(newUserInfo);
          const { displayName, email } = response.user;
          const userData = { name: displayName, email: email };
          setLoggedInUser(userData);
          history.replace(from);
        })
        .catch((error) => {
          const errorMessage = error.message;
          const newUserInfo = { ...loggedInUser };
          newUserInfo.error = errorMessage;
          newUserInfo.success = false;
          setLoggedInUser(newUserInfo);
        });
    }
  };

  //update new user Information
  const updateUserInfo = (name) => {
    const user = firebase.auth().currentUser;
    user
      .updateProfile({
        displayName: name,
      })
      .then(function () {
        console.log("Update successful.");
      })
      .catch(function (error) {
        console.log("update error " + error);
      });
  };

  //handle google sing in
  const handleGoogleLogin = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const { displayName, email } = result.user;
        const user = { name: displayName, email: email };
        setLoggedInUser(user);
        history.replace(from);
      })
      .catch((error) => {
        const newUser = { ...loggedInUser };
        newUser.success = false;
        newUser.error = error.message;
        setLoggedInUser(newUser);
        console.log(error.message);
      });
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-12 m-auto">
            <div className="logInForm">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h3 className="text-center pb-3">Log In</h3>
                <input
                  type="checkbox"
                  onChange={() => setNewUser(!newUser)}
                  name="newUser"
                  id=""
                />
                <label htmlFor="newUser">Are you new User</label>
                {newUser && (
                  <div>
                    <h5>Please Create a account</h5>
                    <input
                      className="w-100 border-primary rounded"
                      placeholder="Enter your Name"
                      {...register("name", { required: true })}
                    />{" "}
                    <br />
                    {errors.exampleRequired && (
                      <span>This field is required</span>
                    )}{" "}
                    <br />
                  </div>
                )}
                <input
                  className="w-100 border-primary rounded"
                  placeholder="Enter your Email"
                  {...register("email", { required: true })}
                />{" "}
                <br />
                {errors.exampleRequired && (
                  <span>This field is required</span>
                )}{" "}
                <br />
                <input
                  className="w-100 border-primary rounded"
                  placeholder="Enter your Password"
                  {...register("password", { required: true })}
                />{" "}
                <br />
                {errors.exampleRequired && (
                  <span>This field is required</span>
                )}{" "}
                <br />
                <input className="btn btn-primary" type="submit" />
              </form>
              <p className="text-danger">{loggedInUser.error}</p>
              {loggedInUser.success && (
                <p className="text-success">
                  {" "}
                  User {newUser ? "created" : "log in"} successfully
                </p>
              )}
              <p className="text-center">Or</p>
              <button
                onClick={handleGoogleLogin}
                className="btn btn-outline-primary w-100"
              >
                Continue With Google
              </button>
            </div>
          </div>
          <div className="col-md-6">
            {/* <img src={logInImg} alt="logIn img" className="img-fluid" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
