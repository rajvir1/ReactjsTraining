import React from 'react';
import { Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import '../App.css'
export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <Link to="/" className="mr-auto navbar-brand">Home App</Link>
          {/* <Link to="/products" className="nav-link">Products</Link> */}
          <Link to="/NestedRoute" className="nav-link Nested">Nested</Link>
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/signup" className="nav-link">Signup</Link>
          <Link to="/stateAndProps" className="nav-link">State and Props</Link>
          {/* <Link to="/Hook" className="nav-link">Hook</Link> */}
          {/* <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <Link to="/login" className="nav-link">Login</Link>
                <Link to="/signup" className="nav-link">Signup</Link>
              </NavItem>
            </Nav>
          </Collapse> */}
        </Navbar>
      </div>
    );
  }
}