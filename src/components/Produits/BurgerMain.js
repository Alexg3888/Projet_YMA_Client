import React, { useState, useEffect } from "react";

import Error from "../Error";
import {getCatProduitData} from "../../services/ApiService";
import Burger from "./Burger";
import {rechercheProduitsParCategorie} from "../../services/CategorieProduitService";

function BurgerMain() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [pizzas, setBurgers] = useState([]);
    const NOM_CATEGORIE = 'Hamburger'

    useEffect(() => {
        getCatProduitData()
            .then(result => {
                let categorieRecherchee = rechercheProduitsParCategorie(NOM_CATEGORIE, result)
                if (categorieRecherchee === null) {
                    let msgError = new Array()
                    msgError['Error'] = "Catégorie " + NOM_CATEGORIE + " introuvable."
                    setError ("Ereur : Catégorie " + NOM_CATEGORIE + " introuvable.")
                } else {
                    setBurgers(categorieRecherchee['produits']);
                }
            })
            .catch((error) => setError(error))
            .finally(() => setIsLoaded(true))
    }, [])

    if (error) {
        return (
            <>
                <div>Une erreur est survenue</div>
                { console.log( error)}
                <Error error={error} />

            </>
        )
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {
        return (
            <>
                <div className="container">
                    <ul>
                        {pizzas.map(categorieProduit => (
                            <li key={categorieProduit.id}>
                                <Burger
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


export default BurgerMain;