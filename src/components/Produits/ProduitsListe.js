import React, {useState, useEffect} from "react";
import {getCatProduitData} from "../../services/ApiService";
import {rechercheProduitsParCategorie} from "../../services/CategorieProduitService";
import Error from "../Error";
import ProduitCard from "./ProduitCard";

function ProduitsListe(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [produits, setProduits] = useState([]);

    useEffect(() => {
        getCatProduitData()
            .then(result => {
                let categorieRecherchee = rechercheProduitsParCategorie(props.nomCategorie, result)
                if (categorieRecherchee === null) {
                    let msgError = new Array()
                    msgError['message'] = "Catégorie " + props.nomCategorie + " introuvable."
                    setError(msgError)
                } else {
                    setProduits(categorieRecherchee['produits']);
                }
            })
            .catch((error) => setError(error))
            .finally(() => setIsLoaded(true))
    }, [])

    return (<>
            {
                (error) ?
                    (
                        <>
                            <div>Une erreur est survenue</div>
                            <Error error={error}/>
                        </>
                    )
                    : (<> {!isLoaded && (<div>Chargement...</div>)}
                        <div className="row">
                            {produits.map((categorieProduit, index) => (
                                <ProduitCard key={index}
                                             id={categorieProduit.id}
                                             nom={categorieProduit.nom}
                                             prix={categorieProduit.prix}
                                             photo={categorieProduit.photo}
                                             description={categorieProduit.description}
                                />

                            ))}

                        </div>
                    </>)
            }
        </>
    )

}

export default ProduitsListe;