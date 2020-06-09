import React from "react";
import ProduitsListe from "./ProduitsListe";

function PizzaMain() {
    const NOM_CATEGORIE = 'Pizza'

    return (<>
            {/* <!-- Carousel  --> */}
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/HomePage/slidepizza.jpg" className="d-block w-100" alt="..."/>
                    </div>
                </div>
            </div>
            {/* <!-- Fin carousel --> */}

            <div className="container">

                <ProduitsListe nomCategorie={NOM_CATEGORIE}/>

            </div>


        </>
    )


    //**********
    //Nouvelle méthode
    //plus bas il y a l'ancienne méthode
    //**********
    // return (<>
    //         {/* <!-- Carousel  --> */}
    //         <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    //             <div className="carousel-inner">
    //                 <div className="carousel-item active">
    //                     <img src="/HomePage/slidepizza.jpg" className="d-block w-100" alt="..."/>
    //                 </div>
    //             </div>
    //         </div>
    //         {/* <!-- Fin carousel --> */}
    //
    //         <div className="container">
    //             {
    //                 (error) ?
    //                     (
    //                         <>
    //                             <div>Une erreur est survenue</div>
    //                             <Error error={error}/>
    //                         </>
    //                     )
    //                     : (<> {!isLoaded && (<div>Chargement...</div>)}
    //
    //
    //                         <ul>
    //                             {pizzas.map(categorieProduit => (
    //                                 <li key={categorieProduit.id}>
    //                                     <Pizza
    //                                         nom={categorieProduit.nom}
    //                                         prix={categorieProduit.prix}
    //                                         photo={categorieProduit.photo}
    //                                         description={categorieProduit.description}
    //                                     />
    //                                 </li>
    //                             ))}
    //                         </ul>
    //                     </>)}
    //         </div>
    //
    //
    //     </>
    // )


    //**********
    //Ancienne méthode
    //**********
    // if (error) {
    //     return (
    //         <>
    //             <div>Une erreur est survenue</div>
    //             <Error error={error} />
    //         </>
    //     )
    // } else if (!isLoaded) {
    //     return <div>Chargement...</div>;
    // } else {
    //     return (
    //         <>
    //             {/* <!-- Carousel  --> */}
    //             <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    //                 <div className="carousel-inner">
    //                     <div className="carousel-item active">
    //                         <img src="/HomePage/slidepizza.jpg" className="d-block w-100" alt="..." />
    //                     </div>
    //                 </div>
    //             </div>
    //             {/* <!-- Fin carousel --> */}
    //             <div className="container">
    //                 <ul>
    //                 {pizzas.map(categorieProduit => (
    //                     <li key={categorieProduit.id}>
    //                     <Pizza
    //                         nom = {categorieProduit.nom}
    //                         prix = {categorieProduit.prix}
    //                         photo = {categorieProduit.photo}
    //                         description = {categorieProduit.description}
    //                     />
    //                     </li>
    //                 ))}
    //                 </ul>
    //             </div>
    //         </>
    //     );
    // }
}

export default PizzaMain;