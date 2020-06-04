import React, { useState, useEffect } from "react";
import Error from "../Error";
import { API_URL } from "./../../constants";

function PizzaMain() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        fetch(API_URL + "/api/categorie_produits")
            .then(res => {
              console.log(res.status);
              if (res.status < 200 || res.status >= 300) {
                throw new Error(res);
              }
              return res.json();
            })
            .then((result) => {
              setIsLoaded(true);
              setPizzas(result['hydra:member']);
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