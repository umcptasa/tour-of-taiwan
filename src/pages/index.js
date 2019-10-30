import React from "react";
import {createMemoryHistory} from "history";
import {Route, Router, Switch} from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.4.0";
import 'typeface-roboto';
import 'typeface-roboto-slab';
// pages for this product
import MainPage from "./MainPage/MainPage.jsx";
import LoginPage from "./LoginPage/LoginPage.jsx";
import SchedulePage from "./SchedulePage/SchedulePage.jsx";

let hist = createMemoryHistory();

export default () => (
  <Router history={hist}>
    <Switch>
      <Route path="/" component={LoginPage} />
      <Route path="/schedule-page" component={SchedulePage} />
      <Route path="/main-page" component={MainPage} />
    </Switch>
  </Router>
);
