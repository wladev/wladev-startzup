import logo from "../../../../assets/img/logo.png";
import React from "react";

export function Presentation() {
    return (
        <>
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-uppercase my-5 fs-1">
                            <span style={{ color: "#36E2AD" }}>Start-Zup</span>{" "}
                            c'est quoi&nbsp;?
                        </h2>
                        <p className="text-uppercase fs-5">
                            Start-Zup est une école proposant un programme
                            complet et ouverte à toutes et tous
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8 mx-auto">
                        <p className="mt-5">
                            Le digital se retrouve à tous les niveaux de la
                            société, des organisations, des métiers et dans
                            toutes les filières. C’est pourquoi nous avons créé
                            un concept unique à Mantes la jolie :
                        </p>
                    </div>
                </div>
                <div className="col-12">
                    <img
                        src={logo}
                        alt="logo de start zup"
                        className="my-3"
                        style={{ width: "20vw" }}
                    />
                </div>
                <div className="row">
                    <div className="col-9 mx-auto text_center mt-5">
                        <p>
                            Offrir le meilleur de l’apprentissage, une formation
                            mettant l’accent sur des projets pratiques et le
                            travail de groupe. Le but est de vous donner les
                            moyens de devenir des professionnels du digital.
                            Start-Zup propose une formation complète et
                            innovante au sein de son école, une formation de
                            plusieurs semaines permettant de découvrir les
                            innombrables métiers du numérique. Mais pas que !
                            Start-Zup est aussi et surtout un lieu de vivre le
                            numérique, un espace dédié à l’échange ouvert aux
                            entrepreneurs et/au télé-travail.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
