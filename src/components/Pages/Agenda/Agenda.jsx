import React, { useState, useEffect } from "react";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Helmet } from "react-helmet";
import '../../../assets/css/style.css';
import { Accordion, Pagination } from "react-bootstrap";

function Events() {
    const [events, setEvents] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [upcomingPage, setUpcomingPage] = useState(1);
    const itemsPerPage = 4;
    const ImgUrl = "https://www.admin-web.start-zup.org/img/";
    // const ImgUrl = "http://localhost:8000/img/";

    const fetchData = async () => {
        try {
            // const response = await fetch("http://localhost:8000/api/events");
            const response = await fetch("https://www.admin-web.start-zup.org/api/events");
            const data = await response.json();
            console.log(data);
            const eventsArray = data['hydra:member'] || [];
            setEvents(eventsArray);
        } catch (error) {
            console.error("Erreur lors de la récupération des données :", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const currentDate = new Date();

    // Fonction pour trier les événements par date du plus récent au plus ancien
    const sortByDateDesc = (eventsArray) => {
        return eventsArray.sort((a, b) => new Date(b.dateEvent) - new Date(a.dateEvent));
    };

    // Filtrer et trier les événements passés, futurs et ceux avec guest=1
    const pastEvents = sortByDateDesc(events.filter(event => new Date(event.dateEvent) < currentDate));
    const guestEvents = sortByDateDesc(events.filter(event => event.guest === 1));
    const upcomingEvents = sortByDateDesc(events.filter(event => new Date(event.dateEvent) >= currentDate && event.guest !== 1));

    // Pagination pour les événements passés
    const indexOfLastPastEvent = currentPage * itemsPerPage;
    const indexOfFirstPastEvent = indexOfLastPastEvent - itemsPerPage;
    const currentPastEvents = pastEvents.slice(indexOfFirstPastEvent, indexOfLastPastEvent);

    // Gestion des événements à venir pour le défilement infini
    const upcomingEventsToShow = upcomingEvents.slice(0, upcomingPage * itemsPerPage);

    // Calculer le nombre total de pages pour les événements passés
    const totalPagesPastEvents = Math.ceil(pastEvents.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleScroll = (e) => {
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if (bottom) {
            setUpcomingPage(prevPage => prevPage + 1);
        }
    };

    // Fonction pour formater la date
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const formatDate2 = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric'};
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <>
            <Helmet>
                <title>Événements</title>
            </Helmet>
            <div className="container-fluid">
                <div className="row" style={{ marginTop: "20vh" }}>
                    <div className="col bgAgenda text-uppercase text-center d-flex justify-content-center">
                        {/* <h1
                            className="text-uppercase my-auto mx-auto"
                            id="agendaTitle"
                            style={{
                                'color': "white",
                                'fontWeight': "bold",
                                'fontSize': "5em",
                            }}
                        >
                            Agenda
                        </h1> */}
                    </div>
                </div>
                <div className="row">
                    <div className="col px-5 py-5 fs-4 text-center">
                        <span className="text-uppercase fs-2 mb-5">à vos agendas&nbsp;!!</span> <br /><br />
                        Retrouvez ici nos prochaines sessions de formation, nos rencontres / événements passés et à venir ainsi que "LES RENCONTRES DU VENDREDI" à ne pas manquer.
                    </div>
                </div>

                {/* Section des événements à venir */}
                <div className="row px-2 d-flex justify-content-around py-5" style={{ "backgroundColor": "#eafbf69d" }}>
                    <div className="card col-lg-6 pt-5 pb-5 border-0" style={{ backgroundColor: '#ffe8f1' }}>
                        <h2 className="text-uppercase fs-3 mb-5">à venir</h2>
                        <div
                            className="rounded-4"
                            style={{ height: '50vh', padding: '20px 30px', overflowY: 'scroll', backgroundColor: '#ffbcd8' }}
                            onScroll={handleScroll}
                        >
                            {upcomingEventsToShow.map(event => (
                                <div className="row text-center d-flex my-3" key={event.dateEvent}>
                                    <Accordion className="px-0">
                                        <Accordion.Item eventKey={event.id}>
                                            <Accordion.Header>
                                                <p><span className="fw-bold">{event.theme} </span>
                                                <br />{event.dateEnd && (<span>du {formatDate2(event.dateEvent)} au {formatDate2(event.dateEnd)} </span>)} {!event.dateEnd && (<span>le {formatDate(event.dateEvent)}</span>)} </p>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                {event.description}
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="card col-lg-5 mt-5 mt-lg-0 pb-5 border-0" style={{ backgroundColor: "#dbe9ff" }}>
                        <h2 className="text-uppercase fs-3 mb-5 pt-5">Les rencontres du vendredi</h2>
                        <div
                            className="rounded-4"
                            style={{ height: '50vh', padding: '10px 30px', overflowY: 'scroll', backgroundColor: '#9ec3fe' }}
                            onScroll={handleScroll}
                        >
                            {guestEvents.map(event => (
                                <div className="row text-center d-flex my-3" key={event.dateEvent}>
                                    <Accordion>
                                        <Accordion.Item eventKey={event.id}>
                                            <Accordion.Header>
                                                <p><span className="fw-bold">{event.theme} </span><br />  le {formatDate(event.dateEvent)}</p>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p>Rendez-vous {event.lieu} pour rencontrer {event.guestName}, {event.guestTitle} chez {event.guestCompany}</p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <hr className="p-0 m-0" />

                {/* Section des événements passés */}
                <div className="row d-flex gap-4 justify-content-center py-5" style={{ "backgroundColor": "#eafbf69d" }}>
                    <h2 className="text-uppercase fs-4">Les événements passés</h2>
                    {currentPastEvents.map(event => (
                        <Card key={event.id} style={{ width: "18rem", padding: "10" }} className="col-4">
                            {event.photo && (
                                <Card.Img className="img-fluid" variant="top" src={ImgUrl + event.photo} alt="image de l'événement" id="event_img" />
                            )}
                            <Card.Body style={{ height: "20rem", marginTop: "2rem", marginBottom: "2rem" }}>
                                <Card.Text className="mt-3" id="event_card">{event.description}</Card.Text>
                                {event.guest === 1 && (<>
                                    <Card.Text className="mt-3 text-uppercase" id="event_card">Rencontre du vendredi</Card.Text>
                                    <Card.Text className="mt-3" id="event_card">Avec {event.guestName}</Card.Text>
                                    <Card.Text className="mt-3" id="event_card">{event.guestTitle} chez {event.guestCompany}<hr/></Card.Text>
                                    <Card.Text className="mt-3" id="event_card">{event.theme}</Card.Text>
                                    </>
                                )}
                                {event.dateEvent && (
                                    <Card.Text className="mt-3" id="event_card"> <br />le {formatDate2(event.dateEvent)}</Card.Text>
                                )}
                                {event.link && (<p><a href={event.link} target="__blank"></a>Retour sur l'événement</p>)}
                                {/* <Button className="mt-3" id="event_btn" href={event.link} target="__blank">
                                    Voir l'événement
                                </Button> */}
                            </Card.Body>
                        </Card>
                    ))}
                    <Pagination className="d-flex justify-content-center">
                        <Pagination.First onClick={() => handlePageChange(1)} disabled={currentPage === 1} className="pagination_btn" />
                        <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
                        {[...Array(totalPagesPastEvents)].map((_, index) => (
                            <Pagination.Item
                                key={index}
                                active={index + 1 === currentPage}
                                onClick={() => handlePageChange(index + 1)}
                                className="paginationItem"
                            >
                                {index + 1}
                            </Pagination.Item>
                        ))}
                        <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPagesPastEvents} />
                        <Pagination.Last onClick={() => handlePageChange(totalPagesPastEvents)} disabled={currentPage === totalPagesPastEvents} />
                    </Pagination>
                </div>
            </div>
        </>
    );
}

export default Events;
