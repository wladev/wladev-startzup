import React from "react";
import { Helmet } from "react-helmet";
import Button from "react-bootstrap/Button";
// import Card from 'react-bootstrap/Card';
import imgEtape1 from "../../../assets/img/etape1.png";
import imgEtape2 from "../../../assets/img/etape2.png";
import imgEtape3 from "../../../assets/img/etape3.png";
import imgEtape4 from "../../../assets/img/etape4.png";
import imgEtape5 from "../../../assets/img/etape5.png";

export default function Entreprises() {
    return (
        <>
            <Helmet>
                <title>Entreprises</title>
            </Helmet>
            <div className="container-fluid" style={{ marginTop: "20vh" }}>
                <div className="row">
                    <div className="col bgEntreprises text-uppercase  text-center d-flex justify-content-center">
                        <h1
                            className="text-uppercase my-auto mx-auto"
                            id="entreprisesTitle"
                            style={{
                                'color': "white",
                                'fontWeight': "bold",
                                'fontSize': "2.5em",
                            }}
                        >
                            Entreprises
                        </h1>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col mx-lg-5 mb-5">
                        <p className="fs-4">
                            <span
                                className="text-uppercase fs-2"
                                style={{ color: "#ff98c3" }}
                            >
                                Start-Zup agency
                            </span>{" "}
                            <br /> est le pôle professionnel de Start-Zup, le
                            lien entre vos ambitions et nos teams. En décidant
                            de collaborer avec nous, vous soutenez l’emploi
                            local en activant les talents de votre région
                        </p>
                    </div>
                </div>
                <div className="row d-flex justify-content-center my-5 fs-5">
                    <div className="col-lg-2 mb-5">
                        <img
                            src={imgEtape1}
                            alt="vous nous contactez"
                            width={100}
                            className="mb-3"
                        />
                        <p>Vous nous contactez</p>
                    </div>
                    <div className="col-lg-2 mb-5">
                        <img
                            src={imgEtape2}
                            alt="nous analysons"
                            width={100}
                            className="mb-3"
                        />
                        <p>Nous analysons vos besoins</p>
                    </div>
                    <div className="col-lg-2 mb-5">
                        <img
                            src={imgEtape3}
                            alt="nous mobilisons"
                            width={100}
                            className="mb-3"
                        />
                        <p>Nos talents se mobilisent</p>
                    </div>
                    <div className="col-lg-2 mb-5">
                        <img
                            src={imgEtape4}
                            alt="nous proposons"
                            width={100}
                            className="mb-3"
                        />
                        <p>Vous validez nos propositions</p>
                    </div>
                    <div className="col-lg-2 mb-5">
                        <img
                            src={imgEtape5}
                            alt="nous finalisons"
                            width={100}
                            className="mb-3"
                        />
                        <p>Nous finalisons le projet</p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col mb-5">
                        <p className="fs-4">
                            Nous vous offrons un accompagnement sur mesure sur
                            les aspects techniques, organisationnels,
                            stratégiques et financiers.
                        </p>
                    </div>
                </div>
                <div className="row fs-5 mt-5">
                    <div className="col-lg-4 mb-5">
                        <p
                            className="text-uppercase fs-3"
                            style={{ color: "#ff98c3" }}
                        >
                            Conseil en stratègie
                        </p>
                        <ul>
                            <li style={{ "listStyle": "none" }}>
                                &#10004; Stratègie des systèmes d'information
                            </li>
                            <li style={{ "listStyle": "none" }}>
                                &#10004; Management
                            </li>
                            <li style={{ "listStyle": "none" }}>
                                &#10004; Optimisation opérationnelle
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4 mb-5">
                        <p
                            className="text-uppercase fs-3"
                            style={{ color: "#ff98c3" }}
                        >
                            Méthodologie et process
                        </p>
                        <ul>
                            <li style={{ "listStyle": "none" }}>
                                &#10004; Audit et analsyse
                            </li>
                            <li style={{ "listStyle": "none" }}>
                                &#10004; Gestion de projets
                            </li>
                            <li style={{ "listStyle": "none" }}>
                                &#10004; Formationet conduite du chargement
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4 mb-5">
                        <p
                            className="text-uppercase fs-3"
                            style={{ color: "#ff98c3" }}
                        >
                            Expertise et technologie
                        </p>
                        <ul>
                            <li style={{ "listStyle": "none" }}>
                                &#10004; Architecture et infrastructure
                            </li>
                            <li style={{ "listStyle": "none" }}>
                                &#10004; Ingénieurie applicative
                            </li>
                            <li style={{ "listStyle": "none" }}>
                                &#10004; Paramètrage et développement
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row fs-4 mb-5">
                    <div className="col mt-5">
                        <p>
                            Nous vous accompagnons sur le recrutement de vos
                            futurs talents qui répondront à vos besoins en
                            compétences numériques, soft skills et codes de
                            l’entreprisedès leur premier jour chez vous.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col mt-5 mb-5">
                        <Button href="/contact" variant="dark">
                            Contactez-nous
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
