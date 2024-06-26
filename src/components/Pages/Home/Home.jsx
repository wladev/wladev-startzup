import React from "react";
import Background from "./Background/Background";
// import { Presentation } from "../APropos/Presentation/Presentation"
import "../../../assets/css/style.css";
import Partenaires from "./Partenaires/Partenaiers";
import Video from "./Video/Video";
import { Helmet } from "react-helmet";

// export class Home extends React.Component {
export function Home() {
    return (
        <>
        <Helmet>
            <meta title="start_zup.com" />
        </Helmet>
            <Background />
            <div className="container-fluid mb-5">
                <div className="row mt-5 mb-5">
                    <div className="col-9 mx-auto">
                        <p className="text-center fs-4">
                            Avec ou sans diplôme, notre formation est ouverte à
                            toutes et à tous, notre seul critère de recrutement
                            est&nbsp;:
                            <br /><br />
                            <strong className="fs-1">VOTRE MOTIVATION&nbsp;!</strong>
                        </p>
                        <p className="mt-5 fs-5">
                            Implantée à Mantes-la-Jolie et Trappes, Start-Zup
                            propose une formation complète et innovante au sein
                            de son école, qui vous permettra de découvrir les
                            innombrables métiers du digital et du numérique.
                        </p>
                    </div>
                </div>
            <Video/>
            <Partenaires />
            </div>
        </>
    );
}
