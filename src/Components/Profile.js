import { useContext, useState, useEffect } from "react";
import AuthContext from "../Store/AuthContext";

function Profile() {
  let context = useContext(AuthContext);
  let token = context.Token;

  let [namee, setNmaee] = useState("");
  let [photoUrll, setPhotourll] = useState("");
  useEffect(() => {
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyCERo0cEydOKZisrgTNN7NpXAxQPAuES78",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: token,
        }),
      }
    ).then((res) => {
      return res.json().then((data) => {
        setNmaee(data.users[0].displayName || "");
        setPhotourll(data.users[0].photoUrl || "");
      });
    });
  }, []);
  function onChangeHandler(e) {
    setNmaee(e.target.value);
  }
  function onChangeHandler1(e) {
    setPhotourll(e.target.value);
  }
  async function submitHandler(e) {
    e.preventDefault();

    let res = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCERo0cEydOKZisrgTNN7NpXAxQPAuES78",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: token,
          displayName: namee,
          photoUrl: photoUrll,
          returnSecureToken: true,
        }),
      }
    );

    if (res.ok) {
      let data = await res.json();
      alert(data.displayName);
    } else {
      let data = await res.json();
      alert(data.error.message);
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
            <input
              type="text"
              className="col-10"
              onChange={onChangeHandler}
              value={namee}
            />
          </div>
          <div className="col-6 ">
            <h3>image URL</h3>
            <input
              type="text"
              className="col-10"
              onChange={onChangeHandler1}
              value={photoUrll}
            />
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
