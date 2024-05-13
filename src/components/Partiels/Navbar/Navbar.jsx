import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import "./Navbar.module.css";
import logo from '../../../assets/img/logo.png'

function NavbarTop() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleLinkClick = () => {
    setExpanded(false); // Fermer le menu lorsqu'un lien est cliqué
  };

  return (
    <Navbar expand="lg" className={`navbar`} id='navbar' expanded={expanded}>
      <Container>
        <NavLink to="/">
          <img src={logo} className={`logo`} alt="" />
        </NavLink>
        <Navbar.Brand href="/" className='nav_link   ms-lg-5'>Start-Zup</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-uppercase" style={{"fontSize": "0.9em"}}>
            <div className="dropDown">
              <NavLink to="/Formations" className={'nav_link dropDownForm'} onClick={() => {}}>Nos Formations</NavLink>
              <div className="dropDownContent" id='dropDownContent'>
                <a href="/Formations#parcours" onClick={() => handleLinkClick()}>Le parcours proposé</a>
                <a href="/Formations#pourquoiSZ" onClick={() => handleLinkClick()}>Pourquoi choisir Start-Zup&nbsp;?</a>
                <a href="/Formations#apresForm" onClick={() => handleLinkClick()}>L'après formation</a>
                <a href="/Formations#integration" onClick={() => handleLinkClick()}>Comment intégrer une session</a>
                <a href="/Formations#financement" onClick={() => handleLinkClick()}>Financement</a>
              </div>
            </div>
            <NavLink to="/Agenda" className={'nav_link ms-lg-4 '} onClick={() => handleLinkClick()}>Agenda</NavLink>
            <NavLink to="/a_propos" className={'nav_link ms-lg-4 '} onClick={() => handleLinkClick()}>&#192; propos</NavLink>
            <NavLink to="/Presse" className={'nav_link ms-lg-4 '} onClick={() => handleLinkClick()}>Presse</NavLink>
            <NavLink to="/Entreprises" className={'nav_link ms-lg-4 '} onClick={() => handleLinkClick()}>Entreprises</NavLink>
            <NavLink to="/Contact" className={'nav_link ms-lg-4 '} onClick={() => handleLinkClick()}>Contactez-nous</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarTop;
