import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../features/home/Home";

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/servicios' render={() => {}} />
      <Route path='/galeria' render={() => {}} />
      <Route path='/contacto' render={() => {}} />
    </Switch>
  );
};

export default AppRoutes;
