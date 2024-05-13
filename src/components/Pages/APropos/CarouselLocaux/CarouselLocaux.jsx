import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../../../assets/css/style.css"

import szMantes1 from "../../../../assets/img/szMantes1.jpg";
import szMantes2 from "../../../../assets/img/szMantes2.jpg";
import szMantes3 from "../../../../assets/img/szMantes3.jpg";
import szMantes4 from "../../../../assets/img/szMantes4.jpg";
import szMantes5 from "../../../../assets/img/szMantes5.jpg";
import szMantes6 from "../../../../assets/img/szMantes6.jpg";
import szMantes7 from "../../../../assets/img/szMantes7.jpg";
import szMantes8 from "../../../../assets/img/szMantes8.jpg";
import szMantes9 from "../../../../assets/img/szMantes9.jpg";

// export default function CarouselLocaux() {
//     return(
//         <>
//         <div className="container-fluid">
//             <div className="row my-5">
//         <Carousel cols={3} rows={1} gap={2} loop autoplay={3000} hideArrow>
//             <Carousel.Item>
//                 <img className="carousel-img" src={szMantes1} alt="" />
//             </Carousel.Item>
//             <Carousel.Item>
//                 <img className="carousel-img" src={szMantes2} alt="" />
//             </Carousel.Item>
//             <Carousel.Item>
//                 <img className="carousel-img" src={szMantes3} alt="" />
//             </Carousel.Item>
//             <Carousel.Item>
//                 <img className="carousel-img" src={szMantes4} alt="" />
//             </Carousel.Item>
//             <Carousel.Item>
//                 <img className="carousel-img" src={szMantes5} alt="" />
//             </Carousel.Item>
//             <Carousel.Item>
//                 <img className="carousel-img" src={szMantes6} alt="" />
//             </Carousel.Item>
//             <Carousel.Item>
//                 <img className="carousel-img" src={szMantes7} alt="" />
//             </Carousel.Item>
//             <Carousel.Item>
//                 <img className="carousel-img" src={szMantes8} alt="" />
//             </Carousel.Item>
//             <Carousel.Item>
//                 <img className="carousel-img" src={szMantes9} alt="" />
//             </Carousel.Item>
//         </Carousel>
//         </div>
//         </div>
//         </>
//     ) 
// }


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 990 },
    items: 4,
// optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
 // optional, default to 1.
  }
};
export default function CarouselLocaux() {
  return (
    <>
    <div className="container-fluid parent">
           <div className="row my-5">
      <Carousel 
        responsive={responsive}
        autoPlay={3000}
        swipeable={true}
        draggable={false}
        showDots={false}
        infinite={true}
        partialVisible={false}
        // dotListClass="custom-dot-list-style"
      >
        
            <div className="carousel-img img-fluid slider">
              <img src={szMantes1} alt="movie" />
            </div>
            <div className="carousel-img img-fluid slider">
              <img src={szMantes2} alt="movie" />
            </div>
            <div className="carousel-img img-fluid slider">
              <img src={szMantes3} alt="movie" />
            </div>
            <div className="carousel-img img-fluid slider">
              <img src={szMantes4} alt="movie" />
            </div>
            <div className="carousel-img img-fluid slider">
              <img src={szMantes5} alt="movie" />
            </div>
            <div className="carousel-img img-fluid slider">
              <img src={szMantes6} alt="movie" />
            </div>
            <div className="carousel-img img-fluid slider">
              <img src={szMantes7} alt="movie" />
            </div>
            <div className="carousel-img img-fluid slider">
              <img src={szMantes8} alt="movie" />
            </div>
            <div className="carousel-img img-fluid slider">
              <img src={szMantes9} alt="movie" />
            </div>
        
      </Carousel>
        </div>
    </div>
    </>
  )
}
