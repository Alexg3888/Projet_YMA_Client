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

         <div class="container">
            <div class="row mt-5">
                <div className="col">
                    <InscriptionFormulaire handleLoginState={props.handleLoginState}/>
                 </div>
            <div className="col mt-5">
                    <img src="/HomePage/fast-food.jpg" className="d-block w-100" alt="..."/>
            </div>
            </div>
        </div>
        </>
    )

}

export default InscriptionMain;