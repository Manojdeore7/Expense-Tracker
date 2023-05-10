import { useRef, useContext } from "react";
import AuthContext from "../Store/AuthContext";

function Profile() {
  let context = useContext(AuthContext);
  let token = context.idToken;
  let nameRef = useRef("");
  let urlRef = useRef("");
  async function submitHandler(e) {
    e.preventDefault();
    let name = nameRef.current.value;
    let url = urlRef.current.value;
    let res = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAgl36Y2mjDOhSlZShpe33Xk4fWzEhi6TE",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: token,
          displayName: name,
          photoUrl: url,
        }),
        returnSecureToken: true,
      }
    );
    if (res.ok) {
      let data = await res.json();
      alert(data.displayName);
    } else {
      alert("some problem is there");
    }
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-2 ">
            <h3>Contact Details</h3>
          </div>
          <div className="col-2 offset-8">
            <button className="btn btn-danger">Cancel</button>
          </div>
        </div>
        <form className="row" onSubmit={submitHandler}>
          <div className="col-6 ">
            <h3>Full Name</h3>
            <input type="text" className="col-10" ref={nameRef} />
          </div>
          <div className="col-6 ">
            <h3>image URL</h3>
            <input type="text" className="col-10" ref={urlRef} />
          </div>

          <div className="col-12 ">
            <button type="submit" className="btn btn-danger">
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default Profile;
