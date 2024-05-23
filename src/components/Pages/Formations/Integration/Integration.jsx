import Button from "react-bootstrap/Button";
import React from "react";




export default function Integration(){
    return (
        <>
        <div className="container-fluid" id="integration">
            <div className="row mt-5">
                <div className="col">
                    <h2 className="text-uppercase">
                        Comment intégrer une session de formation&nbsp;?
                    </h2>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col fs-5">
                    <p>
                        Envoyez-nous une demande via le formulaire de contact.
                    </p>
                    <p>
                        Nous vous indiquerons toutes les démarches à suivre selon votre situation personnelle, ainsi que les prochaines sessions de formation.
                    </p>
                    <div className="row">
                    <div className="col mt-5 mb-5">
                        <Button href="/contact" variant="dark">
                            Contactez-nous
                        </Button>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}