import { Link } from "react-router-dom";
import AuthContext from "../Store/AuthContext";
import { useContext } from "react";
function Header() {
  let context = useContext(AuthContext);
  let login = context.isLoggedIn;
  return (
    <div className="row">
      {!login && (
        <div className="col-2">
          <Link to="/">Auth</Link>
        </div>
      )}
      {login && (
        <div className="col-2">
          <Link to="/Welcome">Welcome</Link>
        </div>
      )}
    </div>
  );
}
export default Header;
