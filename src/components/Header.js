import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
const Header = () => {
  return (
    <Navbar className="my-2" color="secondary" dark>
      <NavbarBrand>SearchingYard Products</NavbarBrand>
    </Navbar>
  );
};

export default Header;
