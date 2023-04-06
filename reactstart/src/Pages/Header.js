import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import CartSummary from "./CartSummary";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <NavbarBrand href="/">Abdulov is BAACK</NavbarBrand>
          <Nav>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <CartSummary cart = {this.props.cart}
            removeFromCart={this.props.removeFromCart}/>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Navbar>
      </div>
    );
  }
}
