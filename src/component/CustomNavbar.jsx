
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import { NavLink as ReactLink } from 'react-router-dom'; 
// "ReactLink" imported from react-router-dom===>use for singlepageApplication(Routing is done without ReLoading the Currentpage)

// function Example(args) {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggle = () => setIsOpen(!isOpen);

//         <NavItem>
 //             <NavLink href="/About/">About Us</NavLink>
  //       </NavItem>

const CustomNavbar = () => {

     const[isOpen, setIsOpen]=useState(false)

  return (
    <div>
      <Navbar
        color="dark"
        dark
        expand="md"
        fixed=""
      >
        <NavbarBrand href="/">E-HealthCare</NavbarBrand>

        <NavbarToggler onClick={()=>setIsOpen(!isOpen)} />

        <Collapse isOpen={isOpen} navbar>
          
          <Nav className="me-auto" navbar>


          <NavItem>
             <NavLink tag={ReactLink} to="/Home">Home</NavLink>
            </NavItem>

            <NavItem>
             <NavLink tag={ReactLink} to="/About">About Us</NavLink>
            </NavItem>
            
            <NavItem>
             <NavLink tag={ReactLink} to="/Contact">Contact Us</NavLink>
            </NavItem>
            


          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
}


export default CustomNavbar;