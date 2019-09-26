import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LocalForm, Control, Errors } from 'react-redux-form';
import { Button, FormGroup, Label } from 'reactstrap';
import { Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const NestedRouteChild = ({ match }) => (
  <div>
  <Link to="/NestedRouteChild" className="nav-link">Nested Route</Link>
  <Route
    path={match}
    children={({ match }) => (
      <div>Nested router data link</div>
    )}
  />
  </div>
);
export default NestedRouteChild;