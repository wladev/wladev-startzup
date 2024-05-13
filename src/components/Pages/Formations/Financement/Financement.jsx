import React from "react";
// import Collapse from 'react-bootstrap/Collapse'
import Accordion from "react-bootstrap/Accordion";
import imgCPF from "../../../../assets/img/logoCPF.png";
import imgOPCO from "../../../../assets/img/logoOPCO.png";
import imgFrTrav from "../../../../assets/img/logoFranceTravail.png";

export default function Financement() {
    return (
        <>
            <div className="container-fluid" id="financement">
                <div className="row">
                    <div className="col">
                        <h2 className="text-uppercase">Le financement</h2>
                    </div>
                </div>
                <div class="row text-center d-flex justify-content-center mt-5">
                    <div className="col-lg-10">
                        <Accordion /* defaultActiveKey={['0']} alwaysOpen */>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    <img
                                        src={imgCPF}
                                        alt="logo CPF"
                                        width={50}
                                        className="me-5"
                                    />
                                    Mon compte personnel de formation (CPF)
                                </Accordion.Header>
                                <Accordion.Body>
                                    Le CPF est votre compte personnel de
                                    formation (CPF). Il accumule des crédits en
                                    tant que salarié·e à raison de 500 € par
                                    année travaillée en France, jusqu’à 5000
                                    euros. <br /> Vous pouvez utiliser ces
                                    crédits pour financer une partie des
                                    programmes certifiés RNCP de Start-Zup.{" "}
                                    <br /> Pour qui ? <br /> Tout personne ayant
                                    déjà travaillé que tant que salarié(e). À
                                    noter que si vous avez déjà travaillé mais
                                    êtes actuellement en recherche d’emploi,
                                    vous pouvez aussi utiliser votre CPF. <br />{" "}
                                    💡 Bon à savoir : Cette modalité de
                                    financement est aussi cumulable avec
                                    d’autres modalités.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    <img
                                        src={imgOPCO}
                                        alt="logo opco"
                                        width={50}
                                        className="me-5"
                                    />
                                    Les opérateurs de compétences (OPCO)
                                </Accordion.Header>
                                <Accordion.Body>
                                    Les OPCO sont des "opérateurs de
                                    compétences". Ils existent pour financer le
                                    développement professionnel de différents
                                    secteurs. Ils peuvent accorder à votre
                                    employeur un financement de votre formation.{" "}
                                    <br />
                                    Start-Zup est référencé sur DataDock et
                                    certifié Qualiopi, la certification
                                    d'assurance qualité requise pour le
                                    financement des OPCO. <br /> Pour qui ?{" "}
                                    <br /> Toute personne salariée. <br /> 💡
                                    Bon à savoir : Pour obtenir un financement
                                    via OPCO, prenez rendez-vous avec votre RH
                                    ou votre manager pour lui présenter votre
                                    projet. Si celui-ci lui semble viable, il
                                    entrera en relation avec l’OPCO de votre
                                    entreprise et vous monterez ensemble un
                                    dossier. Un financement de 2000 à 6000 euros
                                    peut être accordé en fonction de votre
                                    situation spécifique et du budget de
                                    l'employeur. Les démarches prennent en
                                    général un à deux mois.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    <img
                                        src={imgFrTrav}
                                        alt="logo France travail"
                                        width={70}
                                        className="me-5"
                                    />
                                    L'aide Individuelle à la formation (AIF)
                                </Accordion.Header>
                                <Accordion.Body>
                                    C’est une aide financière dédiée aux
                                    demandeurs et demandeuses d’emploi. <br />
                                    Pour qui ? <br /> Pour tout demandeur.se
                                    d'emploi avec l’aval de votre conseiller·e.
                                    Contactez-le/la afin de lui exposer votre
                                    projet professionnel. Il ou elle saura vous
                                    dire si vous êtes éligible à l’AIF, pour
                                    quel montant et comment la solliciter.{" "}
                                    <br /> 💡Bon à savoir : Ces aides varient
                                    selon les régions. Certaines sont plus
                                    susceptibles de financer des formations, en
                                    fonction des priorités de leurs budgets.
                                    Start-Zup peut fournir un devis pour
                                    débloquer ces aides.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>
                                    <img
                                        src={imgFrTrav}
                                        alt="logo France travail"
                                        width={70}
                                        className="me-5"
                                    />
                                    Préparation opérationnelle à l'emploi
                                    individuel (POEI)
                                </Accordion.Header>
                                <Accordion.Body>
                                    Pour qui ? <br />Pour toute personne demandeur.se
                                    d'emploi et ayant trouvé une entreprise
                                    prête à l'embaucher à l’issue du bootcamp,
                                    en CDI ou CDD de 12 mois minimum. Dans ce
                                    cas, Pôle emploi considère qu’il paie une
                                    formation qui mènera directement vers un
                                    job. Cet organisme et l’OPCO concerné
                                    peuvent alors financer la totalité du coût
                                    de la formation chez Start-Zup. <br /> 💡Bon à savoir : Ce
                                    financement suppose de trouver une
                                    entreprise, c’est donc un atout si vous avez
                                    déjà une petite expérience professionnelle
                                    et savez passer des entretiens.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>
        </>
    );
}
