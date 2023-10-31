import React from "react";
let AuthContext = React.createContext({
  Token: "",
  localId: "",
  isLoggedIn: "false",
  login: () => {},
  logOut: () => {},
});
export default AuthContext;
