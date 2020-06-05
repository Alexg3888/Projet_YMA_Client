import React, { useState, useEffect } from "react";
import {getCatProduitData} from "../../services/ApiService";
import {rechercheProduitsParCategorie} from "../../services/CategorieProduitService";
import Error from "../Error";
import Dessert from "./Dessert";

function DessertMain() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [desserts, setDesserts] = useState([]);
    const NOM_CATEGORIE = 'Dessert'

    useEffect(() => {
        getCatProduitData()
            .then(result => {
                let categorieRecherchee = rechercheProduitsParCategorie(NOM_CATEGORIE, result)
                if (categorieRecherchee === null) {
                    let msgError = new Array()
                    msgError['message'] = "Catégorie " + NOM_CATEGORIE + " introuvable."
                    setError (msgError)
                } else {
                    setDesserts(categorieRecherchee['produits']);
                }
            })
            .catch((error) => setError(error))
            .finally(() => setIsLoaded(true))
    }, [])

    if (error) {
        return (
            <>
                <div>Une erreur est survenue</div>
                <Error error={error} />
            </>
        )
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {
        return (
            <>
                {/* <!-- Carousel  --> */}
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="/HomePage/slidepizza.jpg" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                </div>
                {/* <!-- Fin carousel --> */}
                <div className="container">
                    <ul>
                    {desserts.map(categorieProduit => (
                        <li key={categorieProduit.id}>
                        <Dessert
                            nom = {categorieProduit.nom}
                            prix = {categorieProduit.prix}
                            photo = {categorieProduit.photo}
                            description = {categorieProduit.description}
                        />
                        </li>
                    ))}
                    </ul>
                </div>
            </>
        );
    }
}

export default DessertMain;