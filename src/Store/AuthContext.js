import React from "react";
let AuthContext = React.createContext({
  Token: "",
  isLoggedIn: "false",
  login: () => {},
  logOut: () => {},
});
export default AuthContext;
