import React from "react";
import InscriptionFormulaire from "./InscriptionFormulaire";

function InscriptionMain(props) {

    return (
        <>
            {/* <!-- Carousel  --> */}
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/HomePage/slidepageinscription.jpg" className="d-block w-100" alt="..."/>
                    </div>
                </div>
            </div>
            {/* <!-- Fin carousel --> */}

            <div className="container">
                <div className="row justify-content-md-center mt-4">
                    <div className="col-md mt-1">
                        <InscriptionFormulaire handleLoginState={props.handleLoginState}/>
                    </div>
                    <div className="col justify-content-md-center mt-4">
                        <img src="/HomePage/fast-food.jpg" className="d-block w-100" alt="..."/>
                    </div>
                </div>
            </div>
        </>
    )

}

export default InscriptionMain;