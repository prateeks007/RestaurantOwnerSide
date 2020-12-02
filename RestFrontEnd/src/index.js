
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";

import Login from "views/examples/LoginPage.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import AddDish from "views/examples/AddDish";

// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route
        path="/" exact
        render={props => <LandingPage {...props} />}
      />
      <Route
        path="/login"
        render={props => <Login {...props} />}
      />

      <Route
        path="/dashboard"
        render={props => <ProfilePage {...props} />}
      />
      <Route
        path="/register"
        render={props => <RegisterPage {...props} />}
      />
      <Route
        path="/adddish"
        render={props => <AddDish {...props} />}
      />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
