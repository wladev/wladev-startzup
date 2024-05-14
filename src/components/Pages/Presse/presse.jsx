import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Helmet } from "react-helmet";


function Presse() {
    const [articles, setArticles] = useState([]);
    const ImgUrl = "http://localhost:8000/img/"

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/posts")
            .then(response => response.json())
            .then(data => setArticles(data))
            .catch(error => console.error("Erreur lors de la récupération des données :", error));
    }, []);


    return (
        <>
            <Helmet>
                <title>Presse</title>
            </Helmet>
            <div className="container-fluid">
                <div className="row" style={{ marginTop: "20vh" }}>
                    <div className="col bgPresse text-uppercase text-center d-flex justify-content-center">
                        <h1
                            className="text-uppercase my-auto"
                            style={{
                                color: "white",
                                fontWeight: "bold",
                                fontSize: "3.5em",
                            }}
                        >
                            Ils parlent de nous
                        </h1>
                    </div>
                </div>
                <div className="row d-flex gap-3 justify-content-center mt-5">
                    {articles.map(article => (
                        <Card key={article.id} style={{ width: "18rem" }}>
                            <Card.Img variant="top" src={ImgUrl + article.picture} alt="vdsg" height={100} />
                            <Card.Body>
                                <Card.Text id="press_card">{article.description}</Card.Text>
                                <Button href={article.link} target="__blank" variant="dark">
                                    Lire l'article
                                </Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Presse;
