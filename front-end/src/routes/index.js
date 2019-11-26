import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CadastroDesafio from "../pages/CadastroDesafio";
import Ranking from "../pages/Ranking";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/register" exact component={Register} />

      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/register-challenge" exact component={CadastroDesafio} />
      <Route path="/ranking" exact component={Ranking} />

      <Route path="/" component={Register} />
    </Switch>
  );
}
