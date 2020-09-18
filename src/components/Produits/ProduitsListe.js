import React, { useState, useEffect } from "react";
import { getCatProduitData } from "../../services/ApiService";
import { rechercheProduitsParCategorie } from "../../services/CategorieProduitService";
import Error from "../Error";
import ProduitCard from "./ProduitCard";
import Spinner from "../Utils/Spinner";

function ProduitsListe({ nomCategorie }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    getCatProduitData()
      .then((result) => {
        let categorieRecherchee = rechercheProduitsParCategorie(
          nomCategorie,
          result
        );
        if (categorieRecherchee === null) {
          let msgError = {};
          msgError["message"] = "Catégorie " + nomCategorie + " introuvable.";
          setError(msgError);
        } else {
          setProduits(categorieRecherchee["produits"]);
        }
      })
      .catch((e) => setError(e))
      .finally(() => setIsLoaded(true));
  }, [nomCategorie]);

    if (error){
        return (
          <>
              <div>Une erreur est survenue</div>
              <Error error={error} />
          </>
        )
    } else if (!isLoaded){
        return (
            <>
                <Spinner />
            </>
        )
    } else {
        return (
            <>
                <div className="row justify-content-center" id="position-card">
                    {produits.map((categorieProduit, index) => (
                       <ProduitCard
                           key={index}
                             id={categorieProduit.id}
                             nom={categorieProduit.nom}
                             prix={categorieProduit.prix}
                             photo={categorieProduit.photo}
                             description={categorieProduit.description}
                        />
                     ))}
               </div>
            </>
        )
    }
}

export default ProduitsListe;
