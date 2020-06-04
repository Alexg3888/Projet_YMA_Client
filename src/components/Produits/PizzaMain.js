import React, { useState, useEffect } from "react";

import Error from "../Error";
import {getCatProduitData} from "../../services/ApiService";
import Pizza from "./Pizza";
import {rechercheProduitsParCategorie} from "../../services/pizzaService";

function PizzaMain() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [pizzas, setPizzas] = useState([]);
    const NOM_CATEGORIE = 'Pizzas'

    useEffect(() => {
        getCatProduitData()
            .then(result => {
                let categorieRecherchee = rechercheProduitsParCategorie(NOM_CATEGORIE, result)
                if (categorieRecherchee === null) {
                    let msgError = new Array()
                    msgError['Error'] = "Catégorie " + NOM_CATEGORIE + " introuvable."
                    setError ("Ereur : Catégorie " + NOM_CATEGORIE + " introuvable.")
                } else {
                    setPizzas(categorieRecherchee['produits']);
                    // console.log(1, result.data['hydra:member']);
                    // console.log(2, categorieRecherchee['produits']);
                    // console.log(result.data['hydra:member'][0]['produits']);
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
                        <Pizza
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


export default PizzaMain;