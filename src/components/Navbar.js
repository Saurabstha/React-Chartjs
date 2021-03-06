import React from 'react';
import '../App.css';
import * as ReactBootStrap from "react-bootstrap";

import {
    BrowseRouter as Router,
    Link
} from 'react-router-dom';


const Navbar =() => {
  return (
    <div className="App">
      <ReactBootStrap.Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <ReactBootStrap.Navbar.Brand href="#home">React-Bootstrap</ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <Link to="/features">
                <ReactBootStrap.Nav.Link href="#features">Features</ReactBootStrap.Nav.Link>
            </Link>

            <Link to="/pricing">
                <ReactBootStrap.Nav.Link href="#pricing">Pricing</ReactBootStrap.Nav.Link>
            </Link>
            <ReactBootStrap.NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
          </ReactBootStrap.Nav>
          <ReactBootStrap.Nav>
              <Link to="/table-pagination">
                <ReactBootStrap.Nav.Link href="#deets">Table Pagination</ReactBootStrap.Nav.Link>
              </Link>
              <Link to="/dankMemes">
                <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
                Dank memes
                </ReactBootStrap.Nav.Link>
              </Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </div>
  );
}

export default Navbar;
