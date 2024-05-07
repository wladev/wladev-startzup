import React from "react";
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../../../../assets/img/chg.png';
import slide2 from '../../../../assets/img/mlm.png';
import slide3 from '../../../../assets/img/cr_yvelynes.png';
import slide4 from '../../../../assets/img/mte.png';
import slide5 from '../../../../assets/img/tra.png';
import imgIntm from '../../../../assets/img/intm.png';
import imgIBM from '../../../../assets/img/ibm.png';
import imgNextDecision from '../../../../assets/img/nextdecision.png';
import imgSales from '../../../../assets/img/salesForce.png';
import imgOdoo from '../../../../assets/img/odoo.png';
import imgGoogle from '../../../../assets/img/google.png';
import imgAws from '../../../../assets/img/aws.png';
import imgMicrosoft from '../../../../assets/img/microsoft.png';
import imgAmbition from '../../../../assets/img/ambition.png';
import imgArd from '../../../../assets/img/ard.png';

function Partenaires() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
        <div className="container-fluid ">
            <div className="row mb-5">
                <div className="col-12">
                    <p className="text-uppercase fs-2">nos partenaires</p>
                </div>
            </div>
        </div>
    <Carousel activeIndex={index} onSelect={handleSelect} interval= '2000' indicators={null} controls={null}>
      <Carousel.Item >
        <img src={slide1} height="100vh" alt="CHG méridian" />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={slide2} height="100vh" alt="mission locale du mantois" />
        
      </Carousel.Item>
      <Carousel.Item>
        <img src={slide3} height="100vh" alt="département des Yvelines" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={slide4} height="100vh" alt="Mairie de mantes le jolie" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={slide5} height="100vh" alt="mairie de trappes" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={imgIntm} height="100vh" alt="logo INTM" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={imgIBM} height="100vh" alt="logo IBM" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={imgNextDecision} height="100vh" alt="Logo Next decision" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={imgSales} height="100vh" alt="logo Sales Force" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={imgOdoo} height="100vh" alt="logo Odoo" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={imgGoogle} height="100vh" alt="logo google" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={imgAws} height="100vh" alt="logo AWS" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={imgMicrosoft} height="100vh" alt="logo microsoft" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={imgAmbition} height="100vh" alt="logo Ambition Technologies" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={imgArd} height="100vh" alt="logo ARD com" />
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default Partenaires;