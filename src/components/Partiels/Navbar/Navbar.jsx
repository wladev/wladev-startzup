//navbar.jsx

import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/img/logo.png'

function NavbarTop() {
  const [expanded, setExpanded] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [formationsDropdown, setFormationsDropdown] = useState(false);
  const [entreprisesDropdown, setEntreprisesDropdown] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleLinkClick = () => {
    setExpanded(false); // Fermer le menu lorsqu'un lien est cliqué
    setFormationsDropdown(false); // Fermer le dropdown de formations
    setEntreprisesDropdown(false); // Fermer le dropdown d'entreprises
  };

  const toggleFormationsDropdown = () => {
    setFormationsDropdown(!formationsDropdown);
    setEntreprisesDropdown(false); // Fermer le dropdown d'entreprises
  };

  const toggleEntreprisesDropdown = () => {
    setEntreprisesDropdown(!entreprisesDropdown);
    setFormationsDropdown(false); // Fermer le dropdown de formations
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos;

      setVisible(visible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <Navbar expand="lg" className={`navbar ${visible ? 'visible' : 'hidden'}`} id='navbar' expanded={expanded}>
      <Container>
        <NavLink to="/">
          <img src={logo} className={`logo`} alt="" />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-uppercase" style={{ fontSize: "0.9em" }}>
            <div className="dropDown">
              <NavLink 
                to="/Formations" 
                className={'nav_link dropDownForm'} 
                onClick={toggleFormationsDropdown}
              >
                Nos Formations
              </NavLink>
              {formationsDropdown && (
                <div className="dropDownContent" id='dropDownContent'>
                  <a href="/Formations#parcours" onClick={handleLinkClick}>Le parcours proposé</a>
                  <a href="/Formations#pourquoiSZ" onClick={handleLinkClick}>Pourquoi choisir Start-Zup&nbsp;?</a>
                  <a href="/Formations#apresForm" onClick={handleLinkClick}>L'après formation</a>
                  <a href="/Formations#integration" onClick={handleLinkClick}>Comment intégrer une session</a>
                  <a href="/Formations#financement" onClick={handleLinkClick}>Financement</a>
                </div>
              )}
            </div>
            <NavLink to="/Agenda" className={'nav_link ms-lg-4 '} onClick={handleLinkClick}>Agenda</NavLink>
            <NavLink to="/a_propos" className={'nav_link ms-lg-4 '} onClick={handleLinkClick}>&#192; propos</NavLink>
            <NavLink to="/Presse" className={'nav_link ms-lg-4 '} onClick={handleLinkClick}>Presse</NavLink>
            <div className="dropDown ms-lg-4">
              <NavLink 
                to="/Entreprises" 
                className={'nav_link dropDownForm'} 
                onClick={toggleEntreprisesDropdown}
              >
                Entreprises
              </NavLink>
              {entreprisesDropdown && (
                <div className="dropDownContent" id='dropDownContent'>
                  <a href="https://www.start-zup.org/Dashboard_startZupv1/les-stagiaires" target="__blank" onClick={handleLinkClick}>
                    <span style={{ fontSize: "0.9em" }}>Connexion à la plateforme entreprises</span>
                  </a>
                </div>
              )}
            </div>
            <NavLink to="/Contact" className={'nav_link ms-lg-4 '} onClick={handleLinkClick}>Contactez-nous</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarTop;
