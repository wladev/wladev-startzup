import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Helmet } from "react-helmet";
import Pagination from 'react-bootstrap/Pagination';
import '../../../assets/css/style.css'

function Presse() {
    const [articles, setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;
    // const ImgUrl = "https://admin-sz.wladev.fr/img/";
    const ImgUrl = "https://www.admin-web.start-zup.org/img/";

    const fetchData = async () => {
        try {
            // const response = await fetch("https://admin-sz.wladev.fr/api/posts");
            const response = await fetch("https://www.admin-web.start-zup.org/api/posts");
            const data = await response.json();
            console.log(data);
            const articlesArray = data['hydra:member'] || [];
            setArticles(articlesArray);
        } catch (error) {
            console.error("Erreur lors de la récupération des données :", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // Calculer les articles à afficher pour la page actuelle
    const indexOfLastArticle = currentPage * itemsPerPage;
    const indexOfFirstArticle = indexOfLastArticle - itemsPerPage;
    const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

    // Calculer le nombre total de pages
    const totalPages = Math.ceil(articles.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

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
                <div className="row d-flex gap-4 justify-content-center py-5" style={{"backgroundColor": "#eafbf69d"}}>
                    {currentArticles.map(article => (
                        <Card key={article.id} style={{ width: "18rem", "padding": "0" }} className="col-4">
                            <Card.Img className="img-fluid"  variant="top" src={ImgUrl + article.picture} alt="image de presse" id="press_img"/>
                            <Card.Body>
                                <Card.Text className="mt-3" id="press_card">{article.description}</Card.Text>
                                <Button className="mt-3" id="press_btn" href={article.link} target="__blank">
                                    Lire l'article
                                </Button>
                            </Card.Body>
                        </Card>
                    ))}
                <Pagination className="d-flex justify-content-center">
                    <Pagination.First onClick={() => handlePageChange(1)} disabled={currentPage === 1} className="pagination_btn"/>
                    <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
                    {[...Array(totalPages)].map((_, index) => (
                        <Pagination.Item
                            key={index}
                            active={index + 1 === currentPage}
                            onClick={() => handlePageChange(index + 1)}
                            className="paginationItem"
                        >
                            {index + 1}
                        </Pagination.Item>
                    ))}
                    <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
                    <Pagination.Last onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} />
                </Pagination>
                </div>
            </div>
        </>
    );
}

export default Presse;
