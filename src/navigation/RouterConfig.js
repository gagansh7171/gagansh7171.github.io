import React from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import  NotFound  from "./NotFound";
import AboutMe from "../pages/AboutMe";
import Skills from "../pages/Skills";
import Projects from "../pages/projects";
import Achievements from "../pages/Achievements";
import Certi from "../pages/certi";
import WorkEx from "../pages/WorkEx";
export const RouterConfig = () => {
  return (
      <Switch>
        {/* List all public routes here */}  
        <Route exact path="/certi" component={Certi} />
        <Route exact path="/achieve" component={Achievements} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/work" component={WorkEx} />
        <Route exact path="/404" component={NotFound} />
        <Route exact path="/" component={AboutMe} />
        <Route exact path="">
          <Redirect to="/404" />
        </Route>
      </Switch>
  );
};
