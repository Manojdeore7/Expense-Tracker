import { useRef } from "react";
function PasswordLink() {
  let emailRef = useRef("");
  function submitHandler(e) {
    e.preventDefault();
    let email = emailRef.current.value;
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCERo0cEydOKZisrgTNN7NpXAxQPAuES78",
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "PASSWORD_RESET",
          email: email,
        }),
        headers: {
          "Content-Type": "aplication/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            alert(data.error.message);
          });
        }
      })
      .then((data) => {
        alert("email is send");
      });
  }

  return (
    <form className="container" onSubmit={submitHandler}>
      <p>you can send the link of update</p>
      <input type="email" ref={emailRef}></input>
      <button type="submit" className="btn btn-primary">
        Send the Link
      </button>
    </form>
  );
}
export default PasswordLink;
