import React from "react";
import { FormGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Contact() {
    return (
        <>
            <div className="container">
                    <div className="row mx-5" style={{ "margin-top": "20vh" }}>
                        <h2 className="text-uppercase mb-3">Pour candidater à une prochaine session ou solliciter nos services d'accompagnement d'entreprises</h2>
                        <p className="mb-3 fs-5">Renseignez vos informations, nous vous contacterons dans les plus brefs délais</p>
                        <p className="mb-5 fs-5">Vous pouvez également nous écrire directement à <a href ='mailto:contact@start-zup.com'>contact@start-zup.com</a></p>
                    </div>
                <div
                    className="row d-flex justify-content-center bg-dark rounded rounded-5 mx-lg-5 mx-md-3 mx-sm-2"
                    
                >
                    <div className="col-lg-6 ">
                        <h2 className="text-uppercase mt-5" style={{ color: "white" }}>Formulaire de contact</h2>
                        <Form>
                            <p className="mt-5" style={{ color: "white" }}>Vos Informations de contact</p>
                            <Form.Select
                                aria-label="Default select example"
                                className="mb-3"
                            >
                                <option>Vous êtes ?</option>
                                <option value="1">Un particulier</option>
                                <option value="2">Une entreprise</option>
                            </Form.Select>
                            <FormGroup className="mb-3">
                                <Form.Control
                                    type="text"
                                    id="inputFstName"
                                    placeholder="Nom"
                                />
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <Form.Control
                                    type="text"
                                    id="inputLstName"
                                    placeholder="Prénom"
                                />
                            </FormGroup>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                            >
                                <Form.Control
                                    type="email"
                                    placeholder="Entrez votre email"
                                />
                            </Form.Group>
                            <Form.Select
                                aria-label="Default select example"
                                className="mb-3 mt-5"
                            >
                                <option>Situation professionnelle</option>
                                <option value="1">Etudiant</option>
                                <option value="2">Actif</option>
                                <option value="3">Demandeur d'emploi</option>
                                <option value="4">Entreprise</option>
                            </Form.Select>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label style={{ color: "white" }}>
                                    Décrivez vos besoins en quelques lignes
                                </Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>

                            <Form.Select
                                aria-label="Default select example"
                                className="mb-3 mt-5"
                            >
                                <option>
                                    Comment avez vous connu{" "}
                                    <span style={{ color: "#36E2AD" }}>
                                        Start-Zup
                                    </span>
                                </option>
                                <option value="1">Internet</option>
                                <option value="2">Bouche à oreille</option>
                                <option value="3">
                                    Pôle emploi / Mission locale
                                </option>
                            </Form.Select>
                            <Form.Group controlId="formFile" className="mb-3">
        <Form.Label style={{ color: "white" }}>Faites nous parvenir votre CV</Form.Label>
        <Form.Control type="file" />
      </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="formBasicCheckbox"
                            >
                                <Form.Check
                                    type="checkbox"
                                    label="J'ai pris connaissance des informations liées à la conservation de mes données personnelles"
                                    style={{ color: "white" }}
                                />
                            </Form.Group>
                            <Button
                                variant="light"
                                type="submit"
                                className="mb-5"
                            >
                                Envoyer
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
}
