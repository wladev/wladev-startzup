import Carousel from "react-grid-carousel";

import szMantes1 from "../../../../assets/img/szMantes1.jpg";
import szMantes2 from "../../../../assets/img/szMantes2.jpg";
import szMantes3 from "../../../../assets/img/szMantes3.jpg";
import szMantes4 from "../../../../assets/img/szMantes4.jpg";
import szMantes5 from "../../../../assets/img/szMantes5.jpg";
import szMantes6 from "../../../../assets/img/szMantes6.jpg";
import szMantes7 from "../../../../assets/img/szMantes7.jpg";
import szMantes8 from "../../../../assets/img/szMantes8.jpg";
import szMantes9 from "../../../../assets/img/szMantes9.jpg";

export default function CarouselLocaux() {
    return(
        <>
        <div className="container-fluid">
            <div className="row my-5">
        <Carousel cols={3} rows={1} gap={2} loop autoplay={3000} hideArrow>
            <Carousel.Item>
                <img className="carousel-img" src={szMantes1} alt="" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="carousel-img" src={szMantes2} alt="" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="carousel-img" src={szMantes3} alt="" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="carousel-img" src={szMantes4} alt="" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="carousel-img" src={szMantes5} alt="" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="carousel-img" src={szMantes6} alt="" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="carousel-img" src={szMantes7} alt="" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="carousel-img" src={szMantes8} alt="" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="carousel-img" src={szMantes9} alt="" />
            </Carousel.Item>
        </Carousel>
        </div>
        </div>
        </>
    ) 
}