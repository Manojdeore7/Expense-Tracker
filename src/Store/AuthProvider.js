import AuthContext from "./AuthContext";
import { useState } from "react";
function AuthProvider(props) {
  let [Token, setToken] = useState(null);
  let userLoggedIn = !!Token;
  let loggedInHandeler = (token) => {
    setToken(token);
  };
  let loggedOutHandeler = () => {
    setToken(null);
  };

  let context = {
    Token: Token,
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
