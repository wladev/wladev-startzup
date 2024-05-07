import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../../../../assets/css/style.css";

// img imports

import imgFrComp from"../../../../assets/img/frComp.png";
import imgHtml from "../../../../assets/img/html-5.png";
import imgCSS from "../../../../assets/img/css.png";
import imgQualiopi from "../../../../assets/img/qualiopi.png";
import imgJs from "../../../../assets/img/js.png";
import imgPhp from "../../../../assets/img/php.png";
import imgGit from "../../../../assets/img/git.png";
import imgJira from "../../../../assets/img/jira.png";
import imgSql from "../../../../assets/img/sql.png";
import imgSales from "../../../../assets/img/salesForce.png";
import imgOffice from "../../../../assets/img/O365.png";
import imgServiceNow from "../../../../assets/img/serviceNow.png";
import imgOdoo from "../../../../assets/img/odoo.png";
import imgPowerBi from "../../../../assets/img/powerBi.png";
import imgTalend from "../../../../assets/img/talend.png";
import imgAs from "../../../../assets/img/as400.png";
import imgAngular from "../../../../assets/img/angular.png";
import imgReact from "../../../../assets/img/react.png";
import imgNoCode from "../../../../assets/img/noCode.png";


export default function Parcours() {
    const [modalShowCommun, setModalShowCommun] = useState(false);
    const [modalShowSpe, setModalShowSpe] = useState(false);
    const [modalShowStage, setModalShowStage] = useState(false);
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col bgParcours text-uppercase  text-center d-flex justify-content-center">
                        <h1 className="text-uppercase my-auto" style={{'color' : 'white',
                                                                    'fontWeight':'bold',
                                                                    'fontSize':'3.5em',
                                                                    }}>
                            Notre parcours<br /> de formation
                        </h1>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                        <div className="col-lg-4">
                            <img src={imgQualiopi} alt="certification qualiopi" />
                        </div>
                </div>
                    <hr />
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-5">
                        <img src={imgFrComp} className="img-fluid" alt="logo France Compétances"/>
                    </div>
                    <div className="col-lg-4 my-auto">
                        <p>
                            RNCP37674 Développeur web et web mobile 
                        </p>
                        <p>
                            RNCP37873 Concepteur développeur d'applications 
                        </p>
                    </div>
                </div>
                <div className="row my-5 d-flex justify-content-center">
                    <div className="col-8 " >
                        <h2 className="text-uppercase fs-2 p-3 rounded" /* style={{'backgroundColor': '#7ae4c479', 'color': 'white',}} */>De l'entrée en formation au recrutement</h2>
                    </div>
                </div>
                
                <div className="row formations px-3 px-lg-0">
                <Button
                    onClick={() => setModalShowCommun(true)}
                    className="col-lg-3 btn_modal mb-5 mt-5 "
                >
                    <div
                        class="card p-2"
                        id="commun"
                    >
                        <div class=" ">
                            <div
                                class=" rounded justify-center border-bottom border-4"
                            >
                                <p
                                    className=""
                                    style={{
                                        fontSize: "4em",
                                    }}
                                >
                                    1
                                    <h5 class="card-title text-uppercase mb-5">
                                        Tronc commun
                                    </h5>
                                </p>
                            </div>
                            <div class="">
                                <div class="card-body">
                                    <p class="card-text my-3">
                                        <small class="text-body-secondary">
                                            Durée: 3 Mois
                                        </small>
                                    </p>
                                    <p class="card-text">
                                    Acquérez des bases solides en Informatique
                                    et en Développement Web quelque soit votre
                                    niveau.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Button>
                <ModalCommun
                    show={modalShowCommun}
                    onHide={() => setModalShowCommun(false)}
                />
                <Button
                    onClick={() => setModalShowSpe(true)}
                    className="col-lg-3 btn_modal mb-5 mt-5 mx-lg-4"
                >
                    <div
                        class="card p-2"
                        id="specialisation"
                    >
                        <div class=" ">
                            <div
                                class=" rounded-start justify-center border-bottom border-4"
                            >
                                <p
                                    className=""
                                    style={{
                                        fontSize: "4em",
                                    }}
                                >
                                    2
                                    <h5 class="card-title text-uppercase mb-5">
                                    Spécialisation
                                    </h5>
                                </p>
                            </div>
                            <div class="">
                                <div class="card-body">
                                    <p class="card-text my-3">
                                        <small class="text-body-secondary">
                                            Durée: 3 Mois
                                        </small>
                                    </p>
                                    <p class="card-text">
                                    Selon vos préférences ou vos objectifs,
                                    approfondissez vos connaissances parmi les
                                    spécialisations proposées.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Button>
                <ModalSpe
                    show={modalShowSpe}
                    onHide={() => setModalShowSpe(false)}
                />
                <Button
                    onClick={() => setModalShowStage(true)}
                    className="col-lg-3 btn_modal mb-5 mt-5 mx-lg-4"
                    >
                        <div
                            class="card p-2"
                        id="stage"
                    >
                        <div class="">
                            <div
                                class=" rounded justify-center border-bottom border-4"
                                style={{ borderColor: "yellowgreen" }}
                            >
                                <p
                                    className=""
                                    style={{
                                        fontSize: "4em",
                                    }}
                                >
                                    3
                                    <h5 class="card-title text-uppercase mb-5">
                                        Stage Pratique
                                    </h5>
                                </p>
                            </div>
                            <div class="">
                                <div class="card-body">
                                    <p class="card-text my-3">
                                        <small class="text-body-secondary">
                                            Durée: 3 Mois
                                        </small>
                                    </p>
                                    <p class="card-text">
                                    Un stage de 3 mois pour mettre en pratique vos connaissances acquises dans une de nos entreprises partenaires.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Button>

                <ModalStage
                    show={modalShowStage}
                    onHide={() => setModalShowStage(false)}
                />
                </div>
            </div>
        </>
    );
    function ModalCommun(props) {
        return (
            <Modal
                {...props}
                size="lg"
                centered
                id="modal_commun"
            >
                <Modal.Header closeButton style={{'backgroundColor': '#faa8ca',}} >
                    <Modal.Title id="" className="text-uppercase mx-auto">
                        Tronc Commun
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center fs-4">
                    <h4 className="text-center text-uppercase rounded" 
                        style={{"backgroundColor": "#faa8ca", 
                                "color": "white", 
                                "paddingTop": "2vh", 
                                "paddingBottom": "2vh",
                                }}
                    >
                        Contenu de la formation
                    </h4>
                    <hr className="mb-5"/>
                    <h6 className="mb-5 text-uppercase text-center" style={{'color' : '#faa8ca'}}>Langages necessaires au développement</h6>
                    <p className="text-center">
                        HTML{" "}
                        <img
                            src={imgHtml}
                            style={{ height: "25px" }}
                            alt="logo html"
                        />{" "}
                        / CSS{" "}
                        <img
                            src={imgCSS}
                            style={{ height: "25px" }}
                            alt="logo css"
                        />
                    </p>
                    <p>
                        JavaScript{" "}
                        <img
                            src={imgJs}
                            style={{ height: "25px" }}
                            alt="logo JavaScript"
                        />
                    </p>
                    <p>
                        PHP{" "}
                        <img
                            src={imgPhp}
                            style={{ height: "25px" }}
                            alt="logo PHP"
                        />
                    </p>
                    <p>
                        SQL{" "}
                        <img
                            src={imgSql}
                            style={{ height: "25px" }}
                            alt="logo SQL"
                        />
                    </p>
                    <hr className="my-5"/>
                    <h6 className="mb-5 text-uppercase text-center" style={{'color' : '#faa8ca'}}>Logiciel de gestion des versions et de projets</h6>
                    <p>
                        GIT{" "}
                        <img
                            src={imgGit}
                            style={{ height: "25px" }}
                            alt="logo Git"
                        />
                    </p>
                    <p>
                        Jira{" "}
                        <img
                            src={imgJira}
                            style={{ height: "25px" }}
                            alt="logo Jira"
                        />
                    </p>
                </Modal.Body>
            </Modal>
        );
    }
    function ModalSpe(props) {
        return (
            <Modal
                {...props}
                size="lg"
                centered
                id="modal_commun"
            >
                <Modal.Header closeButton style={{'backgroundColor': '#6fa6fd',}} >
                    <Modal.Title id="" className="text-uppercase mx-auto">
                        Spécialisation
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center fs-4">
                    <h4 className="text-center text-uppercase rounded" 
                        style={{"backgroundColor": "#6fa6fd", 
                                "color": "white", 
                                "paddingTop": "2vh", 
                                "paddingBottom": "2vh",
                                }}
                    >
                        Contenu de la formation
                    </h4>
                    <hr className="mb-5"/>
                    <h6 className="mb-5 text-uppercase text-center" style={{'color' : '#6fa6fd'}}>Outils de gestion en entreprise</h6>
                    <p className="text-center">
                        Sales Force{" "}
                        <img
                            src={imgSales}
                            style={{ height: "25px" }}
                            alt="logo html"
                        />{" "}
                    </p>
                    <p>
                        Odoo{" "}
                        <img
                            src={imgOdoo}
                            style={{ height: "25px" }}
                            alt="logo JavaScript"
                        />
                    </p>
                    <p>
                        Office 365{" "}
                        <img
                            src={imgOffice}
                            style={{ height: "25px" }}
                            alt="logo JavaScript"
                        />
                    </p>
                    <p>
                        Service Now (Helpdesk){" "}
                        <img
                            src={imgServiceNow}
                            style={{ height: "25px" }}
                            alt="logo PHP"
                        />
                    </p>
                    <p>
                        Power BI{" "}
                        <img
                            src={imgPowerBi}
                            style={{ height: "25px" }}
                            alt="logo SQL"
                        />
                    </p>
                    <p>
                        Talend{" "}
                        <img
                            src={imgTalend}
                            style={{ height: "25px" }}
                            alt="logo SQL"
                        />
                    </p>
                    <p>
                        SQL{" "}
                        <img
                            src={imgSql}
                            style={{ height: "25px" }}
                            alt="logo SQL"
                        />
                    </p>
                    <p>
                        AS 400{" "}
                        <img
                            src={imgAs}
                            style={{ height: "25px" }}
                            alt="logo SQL"
                        />
                    </p>
                    <hr className="my-5"/>
                    <h6 className="mb-5 text-uppercase text-center" style={{'color' : '#6fa6fd'}}>Outils de développement Web</h6>
                    <p>
                        Angular{" "}
                        <img
                            src={imgAngular}
                            style={{ height: "25px" }}
                            alt="logo Git"
                        />
                    </p>
                    <p>
                        React{" "}
                        <img
                            src={imgReact}
                            style={{ height: "25px" }}
                            alt="logo Jira"
                        />
                    </p>
                    <p>
                        No Code{" "}
                        <img
                            src={imgNoCode}
                            style={{ height: "25px" }}
                            alt="logo Jira"
                        />
                    </p>
                    <hr className="my-5"/>
                    <h6 className="mb-5 text-uppercase text-center" style={{'color' : '#6fa6fd'}}>Autres modules</h6>
                    <p>
                        Entrepreneur
                    </p>
                    <p>
                        IA / Automatisation
                    </p>
                </Modal.Body>
            </Modal>
        );
    }
    function ModalStage(props) {
        return (
            <Modal
                {...props}
                size="lg"
                centered
                id="modal_commun"
            >
                <Modal.Header closeButton style={{'backgroundColor': '#7bd134',}} >
                    <Modal.Title id="" className="text-uppercase mx-auto">
                        Stage Pratique
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center fs-4">
                    <h4 className="text-center text-uppercase rounded" 
                        style={{"backgroundColor": "#7bd134", 
                                "color": "white", 
                                "paddingTop": "2vh", 
                                "paddingBottom": "2vh",
                                }}
                    >
                        Poussez les portes de l'entreprise
                    </h4>
                    <hr className="mb-5"/>
                    <h6 className="mb-5 fs-4 text-uppercase text-center" style={{'color' : '#7bd134'}}>Pourquoi et comment&nbsp;?</h6>
                    <p className="fs-4">
                        Intégrer ou réintégrer le monde de l'entreprise est une étape importante.<br /> Start-Zup continue de vous accompagner. 
                    </p>
                    <p className="fs-4 mb-5">
                        Rejoignez une de nos entreprises partenaires pour votre stage pratique. Vous pourrez ainsi:
                    </p>
                    <ul className="fs-4 mt-5 text-start ">
                        <li className="my-3" style={{'color' : '#7bd134'}}>Consolider vos acquis</li>
                        <li className="my-3" style={{'color' : '#7bd134'}}>Pratiquer en situation réelle</li>
                        <li className="my-3" style={{'color' : '#7bd134'}}>&#201;largir ou créer votre réseau professionnel</li>
                        <li className="my-3" style={{'color' : '#7bd134'}}>Apporter un élément solide à votre CV</li>
                    </ul>
                </Modal.Body>
            </Modal>
        );
    }
}
