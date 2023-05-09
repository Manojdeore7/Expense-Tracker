import React, { useRef, useContext } from "react";
import AuthContext from "../Store/AuthContext";
function AuthPage() {
  let emailRef = useRef("");
  let passwordRef = useRef("");
  let cPasswordRef = useRef("");
  let context = useContext(AuthContext);
  function submitHandler(e) {
    e.preventDefault();
    let enterEmail = emailRef.current.value;
    let enterPassword = passwordRef.current.value;
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAgl36Y2mjDOhSlZShpe33Xk4fWzEhi6TE",
      {
        method: "POST",
        body: JSON.stringify({
          email: enterEmail,
          password: enterPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "aplication/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        context.login(data.idToken);
        if (context.isLoggedIn) {
          console.log("signUp Succesfully");
        }
      });
  }
  return (
    <div className="container ">
      <form className="row " onSubmit={submitHandler}>
        <div className="col-12">
          <h1>Sign In</h1>
        </div>
        <label className="label">Email</label>
        <input type="email" className="form-control" ref={emailRef}></input>
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          ref={passwordRef}
        ></input>
        <label>Confirm Password</label>
        <input
          type="password"
          className="form-control"
          ref={cPasswordRef}
        ></input>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div></div>
    </div>
  );
}
export default AuthPage;
