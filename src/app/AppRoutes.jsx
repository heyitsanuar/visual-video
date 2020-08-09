import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../features/home/Home";
import Services from "../features/services/Services";
import Galery from "../features/galery/Galery";
import Contact from "../features/contact/Contact";

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/servicios' component={Services} />
      <Route path='/galeria' component={Galery} />
      <Route path='/contacto' component={Contact} />
    </Switch>
  );
};

export default AppRoutes;
