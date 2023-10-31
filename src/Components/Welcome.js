import { Link } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import AuthContext from "../Store/AuthContext";

function Welcome() {
  let context = useContext(AuthContext);
  let token = context.Token;
  let localId = context.localId;
  let amountRef = useRef();
  let desRef = useRef();
  let catRef = useRef();
  let array = context.array;
  useEffect(() => {
    context.getData();
  }, []);
  function clickHandler() {
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCERo0cEydOKZisrgTNN7NpXAxQPAuES78",
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "VERIFY_EMAIL",
          idToken: token,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        return res.json().then((data) => {
          console.log(data);
        });
      } else {
        return res.json().then((data) => {
          alert(data.error.message);
        });
      }
    });
    setTimeout(() => {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyCERo0cEydOKZisrgTNN7NpXAxQPAuES78",
        {
          method: "POST",
          body: JSON.stringify({
            idToken: token,
          }),
        }
      ).then((res) => {
        if (res.ok) {
          return res.json().then((data) => {
            if (data.users[0].emailVerified) {
              alert("Email is verified");
            } else {
              alert("Email is not verified");
            }
          });
        } else {
          return res.json().then((data) => {
            alert(data.error.message);
          });
        }
      });
    }, 5000);
  }
  function AddExpense(e) {
    e.preventDefault();

    let fun = async () => {
      await fetch(
        `https://expense-tracker-e9979-default-rtdb.firebaseio.com/Expenses/${localId}.json`,
        {
          method: "POST",
          body: JSON.stringify({
            Amount: amountRef.current.value,
            Description: desRef.current.value,
            Category: catRef.current.value,
          }),
        }
      );
    };
    fun();
    context.getData();
  }
  return (
    <div className="row ">
      <div className="col-4 ">
        <h2>Welcome,In the expense tracker!!!!</h2>;
      </div>
      <div className="col-4 offset-4">
        <h4>
          your profile is incomplete
          <Link to="./Welcome/profile">Complete Now!</Link>
        </h4>
      </div>
      <div className="col-8">
        <title>Add Expenses</title>
        <form onSubmit={AddExpense}>
          <label>Amount</label>
          <input type="number" ref={amountRef}></input>
          <label>Description </label>
          <input type="text" ref={desRef}></input>
          <label>category</label>
          <input type="text" ref={catRef}></input>
          <button type="submit">Add</button>
        </form>
      </div>
      <div className="col-8">
        <table className="table">
          <thead>
            <tr>
              <th>No</th>
              <th>Amount</th>
              <th>Description</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {array.length > 0 &&
              array.map((obj, index) => {
                return (
                  <tr>
                    <td>{index}</td>
                    <td>{obj.Amount}</td>
                    <td>{obj.Description}</td>
                    <td>{obj.Category}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
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
