import React from "react";
import ProduitsListe from "./ProduitsListe";

function TapasMain() {
    const NOM_CATEGORIE = 'Tapas'

    return (<>
            {/* <!-- Carousel  --> */}
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/HomePage/slidepageboisson.jpg" className="d-block w-100" alt="..."/>
                    </div>
                </div>
            </div>
            {/* <!-- Fin carousel --> */}

            <div className="container">

                <ProduitsListe nomCategorie={NOM_CATEGORIE}/>

            </div>


        </>
    )

}

export default TapasMain;