import React from "react";
import '../../../../assets/css/style.css';

export default function Video() {
    return (
        <>
            <div className="container-fluid">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-8 col-12 d-flex justify-content-center">
                        <iframe
                            src="https://www.youtube.com/embed/-CEe3i7nHiY?si=JhuXJBNG5sNjWojM"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                            className="mb-5"
                            id="videoYt"
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    );
}
