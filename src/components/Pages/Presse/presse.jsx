import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import imgMantes from "../../../assets/img/MantesActu.png";
import imgParisien from "../../../assets/img/parisien.png";
import imgGazette from "../../../assets/img/laGazette.png";
import img78Actu from "../../../assets/img/78Actu.png";
import imgLfm from "../../../assets/img/lfm.png";
import imgYvelines from "../../../assets/img/yvelines.png";
import imgItr from "../../../assets/img/itr.png";
import imgEchos from "../../../assets/img/echos.png";
import { Helmet } from "react-helmet";

function Presse() {
    return (
        <>
            <Helmet>
                <title>Presse</title>
            </Helmet>
            <div className="row" style={{'marginTop': '20vh'}}>
              <div className="col">
                <h2 className="text-uppercase">Ils parlent de nous</h2>
              </div>
            </div>
            <div
                className="row d-flex gap-3 justify-content-center mt-5"
            >
                <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={imgMantes} height={100} />
                    <Card.Body>
                        {/* <Card.Title>Card Title</Card.Title> */}
                        <Card.Text>
                            Start Zup à Mantes-la-Jolie : l’école du numérique
                            au Campus de formation Paul Cézanne <br />
                            <br />
                        </Card.Text>
                        <Button
                            href="https://www.mantes-actu.net/start-zup-a-mantes-la-jolie-lecole-du-numerique-au-campus-de-formation-paul-cezanne/"
                            target="__blank"
                            variant="dark"
                        >
                            Lire l'article
                        </Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={imgParisien} height={100} />
                    <Card.Body>
                        {/* <Card.Title>Card Title</Card.Title> */}
                        <Card.Text>
                            Mantes-la-Jolie : à l’école du numérique Start Zup,
                            une formation de trois mois et un boulot
                            quasi-assuré
                        </Card.Text>
                        <Button
                            href="https://www.leparisien.fr/yvelines-78/mantes-la-jolie-a-lecole-du-numerique-start-zup-une-formation-de-trois-mois-et-un-boulot-quasi-assure-13-06-2023-PVDF4XJERFCW3PAJUHP66NJK5U.php"
                            target="__blank"
                            variant="dark"
                        >
                            Lire l'article
                        </Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={imgGazette} height={100} />
                    <Card.Body>
                        {/* <Card.Title>Card Title</Card.Title> */}
                        <Card.Text>
                            L’école du numérique Start zup arrive dans la
                            commune <br />
                            <br /> <br />
                        </Card.Text>
                        <Button
                            href="https://lagazette-sqy.fr/2024/01/12/votreville/trappes/lecole-du-numerique-start-zup-arrive-dans-la-commune/"
                            target="__blank"
                            variant="dark"
                        >
                            Lire l'article
                        </Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={img78Actu} height={100} />
                    <Card.Body>
                        {/* <Card.Title>Card Title</Card.Title> */}
                        <Card.Text>
                            Mantes-la-Jolie : du Val Fourré à Las Vegas, cette
                            association l’a fait <br /> <br /> <br />
                        </Card.Text>
                        <Button
                            href="https://actu.fr/ile-de-france/mantes-la-jolie_78361/mantes-la-jolie-du-val-fourre-a-las-vegas-cette-association-la-fait_60528091.html"
                            target="__blank"
                            variant="dark"
                        >
                            Lire l'article
                        </Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={imgLfm} height={100} />
                    <Card.Body>
                        {/* <Card.Title>Card Title</Card.Title> */}
                        <Card.Text>
                            LE MERCATO DE L'EMPLOI : L'ÉCOLE DU NUMÉRIQUE DE
                            L'ASSOCIATION START ZUP
                            <br /> <br />
                        </Card.Text>
                        <Button
                            href="https://www.lfm-radio.com/podcasts/le-mercato-de-l-emploi-l-ecole-du-numerique-de-l-association-start-zup-2241"
                            target="__blank"
                            variant="dark"
                        >
                            Lire l'article
                        </Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={imgYvelines} height={100} />
                    <Card.Body>
                        {/* <Card.Title height={300}>Card Title</Card.Title> */}
                        <Card.Text>
                            Mantes-la-Jolie : à l’école du numérique Start Zup,
                            une formation de trois mois et un boulot
                            quasi-assuré
                        </Card.Text>
                        <Button
                            href="https://www.yvelines-infos.fr/des-formations-pour-les-jeunes-au-campus-departemental-paul-cezanne/"
                            target="__blank"
                            variant="dark"
                        >
                            Lire l'article
                        </Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={imgItr} height={100} />
                    <Card.Body>
                        {/* <Card.Title height={300}>Card Title</Card.Title> */}
                        <Card.Text>
                            Mantes-la-Jolie : à l’école du numérique Start Zup,
                            une formation de trois mois et un boulot
                            quasi-assuré
                        </Card.Text>
                        <Button
                            href="https://itrnews.com/communiques-de-presse/47683/chg-meridian-france-sengage-aupres-de-la-nouvelle-association-start-zup"
                            target="__blank"
                            variant="dark"
                            // style={{'backgroundColor': '#36E2AD', ' backgroundColor::hover': 'blue'}}
                        >
                            Lire l'article
                        </Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={imgEchos} height={100} />
                    <Card.Body>
                        {/* <Card.Title height={300}>Card Title</Card.Title> */}
                        <Card.Text>
                            Mantes-la-Jolie : à l’école du numérique Start Zup,
                            une formation de trois mois et un boulot
                            quasi-assuré
                        </Card.Text>
                        <Button
                            href="https://www.lesechos.fr/pme-regions/ile-de-france/au-val-fourre-le-campus-paul-cezanne-forme-les-decrocheurs-1957850"
                            target="__blank"
                            variant="dark"
                        >
                            Lire l'article
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}

export default Presse;
