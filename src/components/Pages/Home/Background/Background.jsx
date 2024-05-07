import React from "react";
// import bg from "../../assets/img/sz_bg.jpeg";
// import s from "../Background/Background.module.css";
import "../../../../assets/css/style.css";

function Background() {
    return (
        <>
            <div className="container-fluid" style={{'marginTop': '15vh',}}>
                <div className="row">
                    <div className=" bg_img">
                        <div className="row">
                            <h1 className=" text-uppercase over_background_title text-center">
                                start-zup
                            </h1>
                        </div>
                        <div className="row">
                            <h1 className="text-uppercase over_background text-center">
                                école du numérique
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Background;
