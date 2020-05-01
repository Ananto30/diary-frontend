import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "mobx-react";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
// import "assets/scss/argon-design-system-react.scss";
import "assets/css/argon-design-system-react.css";

import Index from "views/Index";
import Landing from "views/Landing";
import Login from "views/Login";
import Profile from "views/Profile";
import Register from "views/Register";
import Users from "views/Users";
import Diary from "views/Diary";
import DiaryList from "views/DiaryList";
import DiaryEditor from "views/DiaryEditor";
import PrivateRoute from "components/PrivateRoute";

import routes from "routes";

import commonStore from "store/commonStore";
import MyDiaries from "views/MyDiaries";

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
        <Route
          path={routes.login}
          exact
          render={(props) => <Login {...props} />}
        />

        <Route
          path="/register-page"
          exact
          render={(props) => <Register {...props} />}
        />

        <PrivateRoute>
          <Route
            path={routes.users}
            exact
            render={(props) => <Users {...props} />}
          />
          <Route
            path={routes.profile}
            exact
            render={(props) => <Profile {...props} />}
          />
          <Route
            path={`${routes.profile}/:id`}
            exact
            render={(props) => <Profile {...props} />}
          />
          <Route
            path={routes.diary}
            exact
            render={(props) => <DiaryList {...props} />}
          />

          <Route
            path={routes.editor}
            exact
            render={(props) => <DiaryEditor {...props} />}
          />

          <Route
            path={`${routes.diary}/:id`}
            exact
            render={(props) => <Diary {...props} />}
          />
          <Route
            path={routes.myDiaries}
            exact
            render={(props) => <MyDiaries {...props} />}
          />
        </PrivateRoute>

        <Redirect to={routes.login} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
