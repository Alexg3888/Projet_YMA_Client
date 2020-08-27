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
                        {isLoaded && (<div>
                            <div class="jumbotron-validation jumbotron-fluid">
                                <div class="container">
                                    <h1 class="display-4">Votre panier a bien été validé</h1>
                                <p class="lead">le règlement se fera par cb ou espéce, nous n'acceptons plus les chèques</p>
                                </div>
                            </div>
                                     </div>)}
                    </>)
            }
        </>
    )

}

export default ValidationPanier;