import React from "react";
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import { CartWidget } from "./CartWidget";

export const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">Navbar</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Action</NavDropdown.Item>
            <NavDropdown.Item href="#">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
          </NavDropdown>
          {/* <Nav.Link href="#" disabled>
            Disabled
          </Nav.Link> */}
        </Nav>
        <Form >
          <FormControl type="text" placeholder="Search" className="mr-sm-2" id="Buscador"/>
          <br></br>
          <Button variant="outline-success">Search</Button>
        </Form>
        <CartWidget/>
      </Navbar.Collapse>
    </Navbar>
  );
};
