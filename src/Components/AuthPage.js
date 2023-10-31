import React, { useRef, useContext, useState } from "react";
import AuthContext from "../Store/AuthContext";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import PasswordLink from "./PasswordLink";
function AuthPage() {
  let emailRef = useRef("");
  let passwordRef = useRef("");
  let cPasswordRef = useRef("");
  let context = useContext(AuthContext);
  let [signIn, setSignIn] = useState(false);
  let [passwordd, setPasswordd] = useState(true);
  function clickHandler() {
    setPasswordd(false);
  }
  function changeHandler() {
    setSignIn((prev) => {
      return !prev;
    });
  }
  function submitHandler(e) {
    e.preventDefault();
    let enterEmail = emailRef.current.value;
    let enterPassword = passwordRef.current.value;

    let url;
    if (signIn) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCERo0cEydOKZisrgTNN7NpXAxQPAuES78";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCERo0cEydOKZisrgTNN7NpXAxQPAuES78";
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enterEmail,
        password: enterPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "aplication/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        context.login(data.idToken, data.localId);
        console.log(data);
        if (context.isLoggedIn) {
          console.log("signUp Succesfully");
        }
      })
      .catch((er) => {
        alert(er.message);
      });
  }
  return (
    <div className="container ">
      {signIn && passwordd && (
        <LogIn
          submitHandler={submitHandler}
          clickHandler={clickHandler}
          emailRef={emailRef}
          passwordRef={passwordRef}
          cPasswordRef={cPasswordRef}
        />
      )}
      {signIn && !passwordd && <PasswordLink />}
      {!signIn && (
        <SignUp
          submitHandler={submitHandler}
          emailRef={emailRef}
          passwordRef={passwordRef}
        />
      )}
      <br></br>
      <div>
        <button className="btn btn-danger" onClick={changeHandler}>
          {!signIn && "Have an Acount ?LogIn"}
          {signIn && "Don't have an acount ?SignUp"}
        </button>
      </div>
    </div>
  );
}
export default AuthPage;
