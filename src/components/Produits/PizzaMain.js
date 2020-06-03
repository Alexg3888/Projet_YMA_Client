import React, { useState, useEffect } from "react";
import Error from "../Error";

function PizzaMain() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        fetch("https://127.0.0.1:8000/api/categorie_produits")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setPizzas(result['hydra:member']);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])


    if (error) {
        return <div>Erreur : {error.message}</div>;
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