import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CadastroDesafio from "../pages/CadastroDesafio";
import Ranking from "../pages/Ranking";
import CodeSubmit from "../pages/CodeSubmit";
import RankingSchool from "../pages/RankingSchool";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/register" exact component={Register} />

      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/register-challenge" exact component={CadastroDesafio} />
      <Route path="/ranking" exact component={Ranking} />
      <Route path="/code-submit" exact component={CodeSubmit} />
      <Route path="/ranking-school" exact component={RankingSchool} />

      <Route path="/" component={Register} />
    </Switch>
  );
}
