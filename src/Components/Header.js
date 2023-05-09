import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="row">
      <div className="col-2">
        <Link to="./">Auth</Link>
      </div>
      <div className="col-2">
        <Link to="./Welcome">Welcome</Link>
      </div>
    </div>
  );
}
export default Header;
