import React from 'react';
// import { NavLink } from 'react-router-dom';
import "../Footer/Footer.module.css"
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer() {
  return (
    <>
    <MDBFooter className='text-center pt-3' color='black' bgColor='light'>
      <MDBContainer className='p-4'>
        <section className='mb-5'>
          <MDBBtn outline color="dark" floating className='m-1' href='https://twitter.com/Startzup78' role='button' target='_blank'>
            <MDBIcon fab icon='x-twitter' />
          </MDBBtn>

          <MDBBtn outline color="dark" floating className='m-1' href='https://www.instagram.com/startzup78' role='button' target='_blank'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="dark" floating className='m-1' href='https://www.linkedin.com/in/start-zup-ecole-du-numerique-93959b264' role='button' target='_blank'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="dark" floating className='m-1' href='https://www.tiktok.com/@contaqedwyi?lang=fr' role='button' target='_blank'>
            <MDBIcon fab icon='tiktok' />
          </MDBBtn>
        </section>

        
        <section className=''>
          <MDBRow className='d-flex justify-content-around'>
            <MDBCol lg='3' md='12' className='mb-4 mb-md-0'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2617.431114350531!2d1.679946!3d49.0023826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6bf3c46155555%3A0xdbf1e76b5f76a2de!2sStart%20ZUP!5e0!3m2!1sfr!2sfr!4v1717494907652!5m2!1sfr!2sfr" width="300" height="150" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </MDBCol>
            <MDBCol lg='4' md='12' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase text-black'>Start-Zup</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                    Campus Paul Cézane
                </li>
                <li>
                    Bâtiment A, 3ème étage
                </li>
                <li>
                    7 rue Paul GAUGUIN
                </li>
                <li>
                    78200, Mantes-la-jolie
                </li>

              </ul>
            </MDBCol>
            <MDBCol lg='3' md='12' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Liens utiles</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='/Rgpd' className='text-dark'>
                    RGPD / Mentions légales
                  </a>
                </li>
                {/* <li>
                  <a href='#!' className='text-dark'>
                    Conditions générales
                  </a>
                </li> */}
              </ul>
            </MDBCol>

            {/* <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-dark'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-dark'>
                    Link 2
                  </a>
                </li>
                </ul>
                </MDBCol>
                
                <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                <h5 className='text-uppercase'>Links</h5>
                
                <ul className='list-unstyled mb-0'>
                <li>
                <a href='#!' className='text-dark'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-dark'>
                    Link 2
                  </a>
                </li>
                </ul>
                </MDBCol>
                
                <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                <h5 className='text-uppercase'>Links</h5>
                
                <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-dark'>
                    Link 1
                  </a>
                  </li>
                <li>
                  <a href='#!' className='text-dark'>
                  Link 2
                  </a>
                  </li>
                  </ul>
                </MDBCol> */}
          </MDBRow>
          </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:&nbsp;
        <a className='text-dark' href='https://www.start-zup.com/' style={{'textDecoration': 'none',}}>
          Start-Zup
        </a>
      </div>
    </MDBFooter>
    </>
  );
}