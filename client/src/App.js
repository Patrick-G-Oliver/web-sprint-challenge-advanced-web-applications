import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import { Logout } from "./components/Logout";
import BubblePage from "./components/BubblePage";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="login">Log In</Link>
          </li>
          <li>
            <Link to="protected">Bubble Page</Link>
          </li>
          <li>
            <Logout />
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/protected" component={BubblePage} />
          <Route exact path="/" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;