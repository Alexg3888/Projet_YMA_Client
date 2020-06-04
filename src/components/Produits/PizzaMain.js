import React, { useState, useEffect } from "react";

import Error from "../Error";
import {getCatProduitData} from "../../services/ApiService";

function PizzaMain() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        getCatProduitData()
            .then(result => setPizzas(result.data['hydra:member']))
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
                    <ul>
                        {pizzas.map(pizza => (
                            <li key={pizza.nom}>
                                <a href={pizza['@id']}>{pizza.nom}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        );
    }
}


export default PizzaMain;