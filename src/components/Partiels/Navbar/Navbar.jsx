import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import s from './navbar.module.css'
import logo from '../../../assets/img/logo.png'
import { NavLink } from 'react-router-dom';




function NavbarTop() {
  return (
    <>
    <Navbar expand="lg" className={`navbar`} id='navbar' > 
      <Container>
        <NavLink to= "/">
        <img src={logo} className={`logo`} alt="" srcset="" />
        </NavLink>
        <Navbar.Brand href="/" className='nav_link   ms-lg-5'>Start-Zup</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className=" ms-auto text-uppercase " style={{"fontSize": "0.9em"}}>
            <NavLink to="/Formations"className={'nav_link '}>Nos Formations</NavLink>
            <NavLink to="/Agenda" className={'nav_link ms-lg-4 '}>Agenda</NavLink>
            <NavLink to="/a_propos" className={'nav_link ms-lg-4 '}>&#192; propos</NavLink>
            <NavLink to="/Presse" className={'nav_link ms-lg-4 '}>Presse</NavLink>
            <NavLink to="/Entreprises" className={'nav_link ms-lg-4 '}>Entreprises</NavLink>
            <NavLink to="/Contact" className={'nav_link ms-lg-4 ' }>Contactez-nous</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}
var prevScrollpos = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}

export default NavbarTop;