function SignUp(props) {
  return (
    <form className="row " onSubmit={props.submitHandler}>
      <div className="col-12">
        <h1>Sign Up</h1>
      </div>
      <label className="label">Email</label>
      <input type="email" className="form-control" ref={props.emailRef}></input>
      <label>Password</label>
      <input
        type="password"
        className="form-control"
        ref={props.passwordRef}
      ></input>
      <label>Confirm Password</label>
      <input
        type="password"
        className="form-control"
        ref={props.cPasswordRef}
      ></input>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
export default SignUp;
