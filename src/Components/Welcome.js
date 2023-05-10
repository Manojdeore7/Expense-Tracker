import { Link } from "react-router-dom";
function Welcome() {
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
    </div>
  );
}
export default Welcome;
