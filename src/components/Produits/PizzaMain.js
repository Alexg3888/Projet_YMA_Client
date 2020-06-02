import React, { useState, useEffect } from "react";
import Error from "../Error";
import { getProduitData } from "../../services/ProduitService";
import Pizza from "./Pizza";

const PizzaMain  = () => {
  const [pizza, setPizza] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      console.log("La pizza : ", pizza);
      //
      setError(null);
    } catch (e) {
      setError({ message: e.message });
    }
  }, [pizza]);

  useEffect(() => {
    console.log("Je suis monté !");
  }, []);

  const getDataApi = async () => {
    try {
    const res = await getProduitData(pizza);
    setPizza(res.data)
    } catch {
      setError({
        message: "Une erreur est survenue pendant la récupération des données"
      });
    }
  
  // const ajoutProduit = () => {}

  };

    return (
      <>
      <div className="container">
        <Error error={error} />
        <Pizza
          nom={getDataApi.nom}
          description={getDataApi.description}
          prix={getDataApi.prix}
          photo={getDataApi.photo}
          promo={getDataApi.promo}

          // onClickHandler={ajoutProduit}
          nom='La beauté 4 fromages'
          description='Délicieuse'
          prix='15'
          photo='https://picsum.photos/200'
          promo='false'
        />
      </div>
      </>
    );
  };

export default PizzaMain;
