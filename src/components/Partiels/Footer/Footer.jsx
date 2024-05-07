import React from 'react';
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
    <MDBFooter className='text-center mt-5' color='black' bgColor='light'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="dark" floating className='m-1' href='https://twitter.com/Startzup78' role='button' target='_blank'>
            <MDBIcon fab icon='twitter' />
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
          <form action='../../../controllers/pageCtrl.php'>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Abonnez-vous à notre newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' placeholder='Adresse mail' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='dark' type='submit' className='mb-4'>
                  S'abonner
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className='mb-4'>
          <p>
            Restez informés de nos actualités et de nos événements
          </p>
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='12' md='12' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Liens utiles</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-dark'>
                    RGPD
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-dark'>
                    Condutions générales
                  </a>
                </li>
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
  );
}