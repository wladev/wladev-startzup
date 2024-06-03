import React, { useState } from "react";
import { FormGroup, Alert } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Helmet } from "react-helmet";

export default function Contact() {
    const [formData, setFormData] = useState({
        isAn: 0,
        lstName: "",
        fstName: "",
        email: "",
        situation: 0,
        needs: "",
        knowSz: 0,
        cvFile: null,  // Ajout de cvFile pour stocker le fichier
    });

    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { id, value, files } = e.target;
        if (files && files[0]) {
            const file = files[0];
            if (file.type !== 'application/pdf') {
                alert("Seuls les fichiers PDF sont autorisés.");
                return;
            }
        }
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: files ? files[0] : id === "isAn" || id === "situation" || id === "knowSz" ? parseInt(value, 10) : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData();
        Object.keys(formData).forEach(key => {
            form.append(key, formData[key]);
        });

        try {
            // const response = await fetch("https://admin-sz.wladev.fr/api/web_contacts", {
            const response = await fetch("http://localhost:8000/api/web_contacts", {
                method: "POST",
                body: form,
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error("Error details:", errorData);
                throw new Error(`Error: ${response.statusText}`);
            }

            // Afficher l'alerte de succès et rafraîchir la page après 5 secondes
            setSuccess(true);
            setTimeout(() => {
                window.location.reload();
            }, 5000);

        } catch (error) {
            console.error("There was an error!", error);
        }
    };

    return (
        <>
            <Helmet>
                <title>Contact</title>
            </Helmet>
            <div className="container-fluid mb-5">
                <div className="row">
                    {success && (
                        <Alert variant="success" onClose={() => setSuccess(false)} dismissible>
                            Votre message a été envoyé avec succès !
                        </Alert>
                    )}
                </div>

                <div className="row mx-5" style={{ marginTop: "20vh" }}>
                    <h2 className="text-uppercase mb-5 fs-3 text-center">
                        Pour candidater à une prochaine session ou solliciter
                        nos services d'accompagnement d'entreprises
                    </h2>
                    <p className="mb-3 fs-5">
                        Renseignez vos informations, nous vous contacterons dans
                        les plus brefs délais
                    </p>
                    <p className="mb-5 fs-5">
                        Vous pouvez également nous écrire directement à{" "}
                        <a href="mailto:contact@start-zup.com">
                            contact@start-zup.com
                        </a>
                    </p>
                </div>

                <div className="contactForm row d-flex justify-content-center bg-dark rounded rounded-5 mx-2 mx-md-5">
                    <div className="col-lg-8 col-md-8">
                        <h2 className="text-uppercase mt-5" style={{ color: "white" }}>
                            Formulaire de contact
                        </h2>
                        <Form onSubmit={handleSubmit} encType="multipart/form-data">
                            <p className="mt-5" style={{ color: "white" }}>
                                Vos Informations de contact
                            </p>
                            <Form.Select
                                aria-label="Default select example"
                                className="mb-3"
                                id="isAn"
                                value={formData.isAn}
                                onChange={handleChange}
                            >
                                <option>Vous êtes ?</option>
                                <option value="1">Un particulier</option>
                                <option value="2">Une entreprise</option>
                            </Form.Select>
                            <FormGroup className="mb-3">
                                <Form.Control
                                    type="text"
                                    id="lstName"
                                    placeholder="Nom"
                                    value={formData.lstName}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <Form.Control
                                    type="text"
                                    id="fstName"
                                    placeholder="Prénom"
                                    value={formData.fstName}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <Form.Control
                                    type="email"
                                    placeholder="Entrez votre email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                            <Form.Select
                                aria-label="Default select example"
                                className="mb-3 mt-5"
                                id="situation"
                                value={formData.situation}
                                onChange={handleChange}
                            >
                                <option>Situation professionnelle</option>
                                <option value="1">Etudiant</option>
                                <option value="2">Actif</option>
                                <option value="3">Demandeur d'emploi</option>
                                <option value="4">Entreprise</option>
                            </Form.Select>
                            <FormGroup className="mb-3">
                                <Form.Label style={{ color: "white" }}>
                                    Décrivez vos besoins en quelques lignes
                                </Form.Label>
                                <Form.Control
                                    id="needs"
                                    as="textarea"
                                    rows={3}
                                    value={formData.needs}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                            <Form.Select
                                aria-label="Default select example"
                                className="mb-3 mt-5"
                                id="knowSz"
                                value={formData.knowSz}
                                onChange={handleChange}
                            >
                                <option>
                                    Comment avez vous connu{" "}
                                    <span style={{ color: "#36E2AD" }}>
                                        Start-Zup
                                    </span>
                                </option>
                                <option value="1">Internet</option>
                                <option value="2">Réseau personnel</option>
                                <option value="3">
                                    Pôle emploi / Mission locale
                                </option>
                                <option value="4">Autre</option>
                            </Form.Select>
                            <FormGroup className="mb-3">
                                <Form.Label style={{ color: "white" }}>
                                    Faites nous parvenir votre CV
                                </Form.Label>
                                <Form.Control
                                    type="file"
                                    id="cvFile"
                                    onChange={handleChange}
                                />
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <Form.Check
                                    type="checkbox"
                                    label="J'ai pris connaissance des informations liées à la conservation de mes données personnelles"
                                    style={{ color: "white" }}
                                />
                            </FormGroup>
                            <Button variant="light" type="submit" className="mb-5">
                                Envoyer
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
}
