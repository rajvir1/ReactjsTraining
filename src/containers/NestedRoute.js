import React from 'react';
import { LocalForm, Control, Errors } from 'react-redux-form';
import { Button, FormGroup, Label } from 'reactstrap';
import { Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class NestedRoute extends React.Component {
   
  render() {
    return (
        <div>
            <Navbar color="faded" light>
              <Link to="/NestedRouteChild" className="nav-link">Nested Route LInk</Link>
            </Navbar>
        </div>
    );
  }
}