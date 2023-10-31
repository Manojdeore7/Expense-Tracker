import React from "react";
let AuthContext = React.createContext({
  Token: "",
  localId: "",
  array: [],
  getData: () => {},
  isLoggedIn: "false",
  login: () => {},
  logOut: () => {},
});
export default AuthContext;
