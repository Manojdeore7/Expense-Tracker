import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import AuthPage from "./Components/AuthPage";
import Welcome from "./Components/Welcome";
import { useContext } from "react";
import AuthContext from "./Store/AuthContext";
import Header from "./Components/Header";

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
          <Route path="/Welcome">
            <Welcome />
          </Route>
        )}
      </Switch>
    </div>
  );
}

export default App;
