import React, {useState, useEffect} from "react";
import {getContenuPanier} from "../../services/ApiService";
import Error from "../Error";
import PanierLigne from "./PanierLigne";

function Panier(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [panier, setPanier] = useState([]);

    useEffect(() => {
        getContenuPanier()
            .then(result => {
                if (result === null) {
                    let msgError = new Array()
                    msgError['message'] = "Panier vide"
                    setError(msgError)
                } else {
                    console.log(result)
                    setPanier(result.data);
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
                            {panier.map((panierLigne, index) => (
                                <PanierLigne key={index}
                                             id={panierLigne.id}
                                             nom={panierLigne.nom}
                                             prix={panierLigne.prix}
                                             photo={panierLigne.photo}
                                />
                            ))}
                        </div>
                    </>)
            }
        </>
    )

}

export default Panier;