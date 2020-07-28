import React from "react";
import { Switch, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path='/' />
      <Route path='/servicios' render={() => {}} />
      <Route path='/galeria' render={() => {}} />
      <Route path='/contacto' render={() => {}} />
    </Switch>
  );
};

export default AppRoutes;
