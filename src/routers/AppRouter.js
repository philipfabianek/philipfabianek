import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LandingPage from "./../scripts/components/LandingPage";
import About from "./../scripts/components/About";
import Features from "./../scripts/components/Features";
import Portfolio from "./../scripts/components/Portfolio";
import Contact from "./../scripts/components/Contact";

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path={"/"} exact={true} component={LandingPage} />
                <Route path={"/about"} exact={true} component={About} />
                <Route path={"/features"} exact={true} component={Features} />
                <Route path={"/portfolio"} exact={true} component={Portfolio} />
                <Route path={"/contact"} exact={true} component={Contact} />
                <Route component={LandingPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
