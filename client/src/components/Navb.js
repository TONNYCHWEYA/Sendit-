import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
 Link
  
 } from "react-router-dom";
 import React from 'react';
 import styled from "styled-components"
 const Style = styled.div`
 .nav{
  background-color: #1A237E;
  text-color: white;
 }

`;

function Navb({setUser, user}) {
  const handleLogout = () =>{
    setUser(null)
    localStorage.removeItem("token")
  }
  return (
    <Style>
    <Navbar expand="lg" className='nav' style={{background: '#1A237E', color: 'white'}}>
      <Container>
        <Navbar.Brand href="#home">SENDIT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
           
            <Nav.Link as={Link} to={"/sendaparcel"}>Send a parcel</Nav.Link>
            <Nav.Link as={Link} to={"/about"}>About Us</Nav.Link>
            <Nav.Link as={Link} to={"/contactus"}>Contact Us</Nav.Link>
            <Nav.Link as={Link} to={"/myaccount"}>My account</Nav.Link>
            {user ?   <Nav.Link as={Link} to={"/login"} onClick={handleLogout}>Logout</Nav.Link> : <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Style>
  );
}

export default Navb;