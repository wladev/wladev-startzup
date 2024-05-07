import React from "react";
// import imgSchool1 from "../../../../assets/img/school1.jpg";
// import imgSchool2 from "../../../../assets/img/school2.jpg";



export default function Objectifs(){
    return(
        <>
        <div className="container-fluid">
            <div className="row mb-5">
                <div className="col">
                    <h2 className="text-uppercase">
                        Nos objectifs
                    </h2>
                </div>
            </div>
            <div className="row mt-5 d-flex justify-content-end align-items-end">
                <div className="col-lg-3 mb-3">
                    {/* <img src={imgSchool1} alt="" width={200}/> */}
                </div>
                <div className="col-lg-6 my-auto">
                    <p className="fs-5">
                    Start-Zup a été créée pour venir en aide aux personnes qui en ont le
plus besoin, en proposant aux personnes éloignées du marché
de l'emploi, en particulier les personnes peu ou pas qualifiées, d'avoir
une formation complète et gratuite dans les métiers du numérique et du digital.
                    </p>
                </div>
            </div>
            <div className="row mt-5 d-flex justify-content-start align-items-start">
                <div className="col-lg-3 mb-3">
                    {/* <img src={imgSchool2} alt="" width={200}/> */}
                </div>
                <div className="col-lg-6 my-auto">
                    <p className="fs-5">
                    Nous avons pour objectif de promouvoir la diversité et l'inclusion dans les nouvelles technologies et tout ce qui concerne la digitalisation.
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}