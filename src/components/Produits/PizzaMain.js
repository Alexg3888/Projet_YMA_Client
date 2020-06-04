import React, { useState, useEffect } from "react";

import Error from "../Error";
import {getCatProduitData} from "../../services/ApiService";
import Pizza from "./Pizza";

function PizzaMain() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [categorieProduits, setCategorieProduits] = useState([]);

    useEffect(() => {
        getCatProduitData()
            .then(result => setCategorieProduits(result.data['hydra:member']))
            .catch((error) => setError(error))
            .finally(() => setIsLoaded(true))
    }, [])

    if (error) {
        return <div>Une erreur est survenue</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {
        return (
            <>
                <div className="container">
                    <Error error={error} />
                    {categorieProduits.map(categorieProduit => (
                        <Pizza
                            nom = {categorieProduit.nom}
                            prix = {categorieProduit.prix}
                            photo = {categorieProduit.photo}
                            description = {categorieProduit.description}
                        />
                    ))}

                    <ul>
                        {categorieProduits.map(categorieProduit => (
                            <li key={categorieProduit.nom}>
                                <a href={categorieProduit['@id']}>{categorieProduit.nom}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        );
    }
}


export default PizzaMain;