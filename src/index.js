import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "mobx-react";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
// import "assets/scss/argon-design-system-react.scss";
import "assets/css/argon-design-system-react.css";

import Index from "views/Index.js";
import Landing from "views/examples/Landing.js";
import Login from "views/examples/Login.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";
import Users from "views/examples/Users.js";
import Diary from "views/examples/Diary.js";

import commonStore from "store/commonStore.js";

const stores = {
  commonStore,
};

// For easier debugging
window._____APP_STATE_____ = stores;

ReactDOM.render(
  <Provider {...stores}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={(props) => <Index {...props} />} />
        <Route
          path="/landing-page"
          exact
          render={(props) => <Landing {...props} />}
        />
        <Route path="/login" exact render={(props) => <Login {...props} />} />
        <Route
          path="/profile"
          exact
          render={(props) => <Profile {...props} />}
        />
        <Route
          path="/register-page"
          exact
          render={(props) => <Register {...props} />}
        />
        <Route
          path="/users-page"
          exact
          render={(props) => <Users {...props} />}
        />
        <Route
          path="/profile/:id"
          exact
          render={(props) => <Profile {...props} />}
        />
        <Route
          path="/diary-page/:id"
          exact
          render={(props) => <Diary {...props} />}
        />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
