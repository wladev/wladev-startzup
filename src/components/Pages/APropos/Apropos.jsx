import React from "react";
import { Presentation } from "./Presentation/Presentation";
import image from '../../../assets/img/sz_bg.jpeg';
import { Helmet } from 'react-helmet';
import Objectifs from "./Objectifs/Objectifs";
import CarouselLocaux from "./CarouselLocaux/CarouselLocaux";

export function Apropos(){

    return (
        <>
        <Helmet>
            <title>&#192; propos</title>
        </Helmet>
        <div className="container-fluid" style={{'marginTop': '20vh',}}>
            <img src={image} alt="start-Zup" style={{'width': '80vw'}}/>
            <div className="row mb-5">
                <div className="col">
                    <Presentation />
                </div>
            </div>
            <CarouselLocaux/>
        <Objectifs />
        </div>
        </>
    )
}