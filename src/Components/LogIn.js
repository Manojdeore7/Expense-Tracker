import { useState } from "react";

function LogIn(props) {
  return (
    <form className="row " onSubmit={props.submitHandler}>
      <div className="col-12">
        <h1>LogIn</h1>
      </div>
      <label className="label">Email</label>
      <input type="email" className="form-control" ref={props.emailRef}></input>
      <label>Password</label>
      <input
        type="password"
        className="form-control"
        ref={props.passwordRef}
      ></input>
      <br></br>
      <button onClick={props.clickHandler} className="btn btn-primary">
        Do you forgot your Password?
      </button>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
export default LogIn;
