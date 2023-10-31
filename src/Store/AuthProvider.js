import AuthContext from "./AuthContext";
import { useState } from "react";
function AuthProvider(props) {
  let [Token, setToken] = useState(null);
  let [localId, setLocalId] = useState(null);
  let [array, setArray] = useState([]);
  let userLoggedIn = !!Token;

  let loggedOutHandeler = () => {
    setToken(null);
  };

  async function funGet() {
    let arr = [];

    let res = await fetch(
      `https://expense-tracker-e9979-default-rtdb.firebaseio.com/Expenses/${localId}.json`
    );
    let data = await res.json();
    for (let key in data) {
      arr.push(data[key]);
    }

    setArray(arr);
  }
  let loggedInHandeler = (token, local) => {
    setToken(token);
    setLocalId(local);
  };
  function getData() {
    funGet();
  }

  let context = {
    localId: localId,
    Token: Token,
    getData: getData,
    array: array,
    isLoggedIn: userLoggedIn,
    login: loggedInHandeler,
    logOut: loggedOutHandeler,
  };
  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;
