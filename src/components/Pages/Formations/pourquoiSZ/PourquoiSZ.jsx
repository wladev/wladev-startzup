import React from "react";
import imgPartage from '../../../../assets/img/partage.png';
import imgEchange from '../../../../assets/img/echange.png';
import imgExcellence from '../../../../assets/img/excellence.png';
import imgFree from '../../../../assets/img/free.png';

export default function PourquoiSZ() {
    return (
        <>
            <div
                className="container-fluid mt-5"
                id="pourquoiSZ"
            >
                <div className="row text-uppercase">
                    <div className="col">
                        <h2>Pourquoi choisir Start-Zup&nbsp;?</h2>
                    </div>
                </div>
                <div className="row mt-5 d-flex justify-content-center gap-5 px-3 px-lg-0">
                    <div className="col-lg-2">
                        <img src={imgPartage} alt="" width={70} className="mx-auto"/>
                        <p
                            className="text-uppercase fs-5 mt-2"
                            style={{'fontFamily': 'Libre Baskerville'}}
                        >
                            Le partage
                        </p>
                        <p>
                            Notre école est fondée sur le partage. Notre seul
                            but est de partager nos connaissances et de faire en
                            sorte que tous nos étudiants s'entraident.
                        </p>
                    </div>
                    <div className="col-lg-2">
                        <img src={imgEchange} alt="" width={70} className="mx-auto"/>
                        <p
                            className="text-uppercase fs-5 mt-2"
                            style={{'fontFamily': 'Libre Baskerville'}}
                        >
                            L'ÉCHANGE
                        </p>
                        <p>
                            L'échange et la communication entre étudiants et
                            professeurs est primordial pour la réussite du
                            projet
                        </p>
                    </div>
                    <div className="col-lg-2">
                        <img src={imgExcellence} alt="" width={70} className="mx-auto"/>
                        <p
                            className="text-uppercase fs-5 mt-2"
                            style={{'fontFamily': 'Libre Baskerville'}}
                        >
                            l'excellence
                        </p>
                        <p>
                            Nous voulons vous offrir la meilleure formation
                            possible, c'est pour cela que notre équipe
                            pédagogique a été soigneusement sélectionnée.
                        </p>
                    </div>
                    <div className="col-lg-2">
                        <img src={imgFree} alt="" width={70} className="mx-auto"/>
                        <p
                            className="text-uppercase fs-5 mt-2"
                            style={{'fontFamily': 'Libre Baskerville'}}
                        >
                            La gratuité
                        </p>
                        <p>
                            Notre école repose sur un principe de gratuité, afin
                            que n'importe qui puisse bénéficier de nos
                            formations. L'argent ne doit pas être un frein pour
                            votre réussite.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
