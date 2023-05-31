import React, { useState } from "react";

import { Nav, MenuLink, Logo, Menu, Hamburger } from "./NavbarStyles";

import { FaBars } from "react-icons/fa";





const Navbar = () => {


const[acik,setAcik]=useState(false)
const handleClick = () =>{setAcik(!acik)} ;

  return (
    <Nav>
      <Logo to={"/home"}>
        <i>{"<Clarusway>"}</i>
        <span>recipe</span>
      </Logo>

      <Hamburger>
        <FaBars onClick={handleClick} />
      </Hamburger>

      <Menu osman={acik} onClick={() => setAcik(!acik)}>

        <MenuLink to={"/about"}>About</MenuLink>
        <a href="https://github.com/">GitHub</a>
        <MenuLink to={"/Login"}>Logout</MenuLink>

      </Menu>
    </Nav>
  );
};

export default Navbar;
