/*********** Routes for applications **************/
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../containers/home';
import Signup from '../containers/signup';
import Login from '../containers/login';
import Products from '../containers/products';
import NestedRoute from '../containers/NestedRoute';
import NestedRouteChild from '../containers/NestedRouteChild';
import Header from '../components/header';
import NotFound from '../components/NoFound';
const Routers = () => {
    return (            
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/products" component={Products} />
                <Route exact path="/NestedRoute" component={NestedRoute} />   
                <Route exact path="/NestedRouteChild" component={NestedRouteChild} />
             
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    );
};

export default Routers;