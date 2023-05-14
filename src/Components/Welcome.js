import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../Store/AuthContext";
function Welcome() {
  let context = useContext(AuthContext);
  let token = context.Token;
  function clickHandler() {
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAgl36Y2mjDOhSlZShpe33Xk4fWzEhi6TE",
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "VERIFY_EMAIL",
          idToken: token,
        }),
      }
    ).then((res) => {
      return res.json().then((data) => {
        alert(data.email);
      });
    });
  }
  return (
    <div className="row ">
      <div className="col-4 ">
        <h2>Welcome,In the expense tracker!!!!</h2>;
      </div>
      <div className="col-4 offset-4">
        <h4>
          your profile is incomplete{" "}
          <Link to="./Welcome/profile">Complete Now!</Link>
        </h4>
      </div>
      <div>
        <button className="btn btn-primary" onClick={clickHandler}>
          Verify Email
        </button>
      </div>
    </div>
  );
}
export default Welcome;
