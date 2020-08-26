import React, {useEffect, useState} from "react";
import {postValidationPanier} from "../../services/ApiService";
import Error from "../Error";

function ValidationPanier() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // TODO YC : Prevoir le cas ou le panier est vide
        postValidationPanier()
            .then(async (result) => {
                if (result.data['reponse'] == 'Commande enregistree') {
                    setIsLoaded(true)
                }
            })
            .catch((error) => setError(error))
            }, [])


    return (
        <>
            {
                (error) ?
                    (
                        <>
                            <div>Une erreur est survenue</div>
                            <Error error={error}/>
                        </>
                    )
                    : (<> {!isLoaded && (<div>Chargement...</div>)}
                        {isLoaded && (<div>VICTOIRE</div>)}
                    </>)
            }
        </>
    )

}

export default ValidationPanier;