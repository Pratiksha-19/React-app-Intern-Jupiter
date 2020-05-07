import React from 'react';
import { Nav, Navbar, Form, FormControl} from 'react-bootstrap';
import styled from 'styled-components';
import { FaRegUserCircle} from 'react-icons/fa';

const Styles = styled.div`
  .nav {text-align:center;font-size:1.3em; background-color: white; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: black;
    &:hover { color: white; }
  }
  .navbar-brand {
    float:right;
    font-size: 3.5em;
    color: #9FFFCB;
    text-align:center;
    &:hover { color: white; }
    align-items:center;
  }
  .form-center {
    text-align:center;
  }
`;

export const Navi = () => (
  <Styles>
    <Nav className ="navbar navbar-expand ">
       <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/"><FaRegUserCircle/>User</Nav.Link></Nav.Item> 
        </Nav>
      </Navbar.Collapse>
    </Nav>
  </Styles>
)

export default Navi;