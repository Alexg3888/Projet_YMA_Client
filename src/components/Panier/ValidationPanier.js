import React, {useEffect, useState} from "react";
import {postValidationPanier} from "../../services/ApiService";
import Error from "../Error";
import Spinner from "../Utils/Spinner";

function ValidationPanier() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // TODO YC : Prevoir le cas ou le panier est vide
        postValidationPanier()
            .then(async (result) => {
                if (result.data['reponse'] === 'Commande enregistree') {
                    window.localStorage.setItem('panier', "[]")
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
                    : (<> {!isLoaded && (
                            <Spinner />
                        )}
                        {isLoaded && (
                        <div>
                            <div className="jumbotron-validation jumbotron-fluid">
                                <div className="container">
                                    <h1 className="display-4">Votre panier a bien été validé</h1>
                                    <p className="lead">le règlement se fera par cb ou espéce, nous n'acceptons plus les chèques</p>
                                </div>
                            </div>
                        </div>)}
                    </>
                )
            }
        </>
    )
}

export default ValidationPanier;