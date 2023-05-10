import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import AuthPage from "./Components/AuthPage";
import Welcome from "./Components/Welcome";
import { useContext } from "react";
import AuthContext from "./Store/AuthContext";
import Header from "./Components/Header";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Profile from "./Components/Profile";
function App() {
  let context = useContext(AuthContext);
  let login = context.isLoggedIn;
  return (
    <div className=" App">
      <Header />
      <Switch>
        {!login && (
          <Route path="/">
            <AuthPage />
          </Route>
        )}
        {login && (
          <Route path="/Welcome" exact>
            <Welcome />
          </Route>
        )}
        {login && (
          <Route path="/" exact>
            <Redirect to="/Welcome" />
          </Route>
        )}
        {login && (
          <Route path="/Welcome/Profile">
            <Profile />
          </Route>
        )}
      </Switch>
    </div>
  );
}

export default App;
