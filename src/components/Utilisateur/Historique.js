import React, {useState, useEffect} from "react";
import {getHistorique} from "../../services/ApiService";
import Error from "../Error";
import {useHistory} from "react-router-dom";
import Commande from "./Commande";

function Historique(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [commandes, setCommandes] = useState([]);

    const history = useHistory();

    useEffect(() => {
        getHistorique()
            .then(result => {
                if (result.data === "Pas de commande") {
                    alert("Vous n'avez pas encore valider de commande")
                    history.push("/utilisateur");
                } else {
                    setCommandes(result.data);
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
                    : (<> {!isLoaded && (
                        <div class="d-flex justify-content-center">
                            <div className="spinner-grow text-warning" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    )}
                    <div class="container">
                        <div className="row">
                            <div
                                className="col-4 py-3 d-flex flex-wrap align-content-center justify-content-center border-bottom">Date
                                de commande
                            </div>
                            <div
                                className="col-4 py-3 d-flex flex-wrap align-content-center justify-content-center border-bottom">Type
                                de commande
                            </div>
                            <div
                                className="col-4 py-3 d-flex flex-wrap align-content-center justify-content-center border-bottom">Prix
                                total commande
                            </div>
                            {/*<div*/}
                            {/*    className="col-4 py-3 d-flex flex-wrap align-content-center justify-content-center border-bottom">Detail*/}
                            {/*</div>*/}
                        </div>
                        <div className="row">

                            {commandes.map((commande, index) => (
                                <Commande
                                    date_retrait={commande.date_retrait}
                                    emporte={commande.emporte}
                                    prix_total={commande.prix_total}
                                />
                            ))}
                        </div>
                        </div>
                    </>)
            }
        </>
    )

}

export default Historique;