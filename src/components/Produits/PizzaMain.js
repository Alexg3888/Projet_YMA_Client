import React, { useState, useEffect } from "react";
import { API_URL } from "./../../constants";
import Error from "../Error";
import Axios from 'axios';

function PizzaMain() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
      Axios.get(API_URL + "/api/categorie_produits")
          .then((result) => {
            setIsLoaded(true);
            setPizzas(result.data['hydra:member']);
            },   
          )
          .catch((error) => {
            setIsLoaded(true);
            setError(error);
            console.log(error);
        })
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