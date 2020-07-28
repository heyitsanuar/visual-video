import React from "react";
import { Switch, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Switch>
      <Route path='/' />
      <Route path='/servicios' />
      <Route path='/galeria' />
      <Route path='/contacto' />
    </Switch>
  );
};

export default AppRoutes;
