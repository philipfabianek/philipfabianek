import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LandingPage from "./../scripts/components/LandingPage";
import Pages from "./../scripts/components/Pages";

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                {/* <Route path={"/"} exact={true} component={LandingPage}/> */}
                <Route path={"/"} exact={true} component={({history}) => ( <LandingPage history={history} />)}/>
                <Route path={"/about"} exact={true} component={({history}) => ( <Pages page="about" history={history}/> )}/>
                <Route path={"/features"} exact={true} component={({history}) => ( <Pages page="features" history={history}/> )}/>
                <Route path={"/portfolio"} exact={true} component={({history}) => ( <Pages page="portfolio" history={history}/> )}/>
                <Route path={"/contact"} exact={true} component={({history}) => ( <Pages page="contact" history={history}/> )}/>
                <Route component={LandingPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
