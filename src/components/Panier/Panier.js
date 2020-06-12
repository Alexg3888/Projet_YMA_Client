import React, {useState, useEffect} from "react";
import {getContenuPanier} from "../../services/ApiService";
import Error from "../Error";
import PanierLigne from "./PanierLigne";
import {supprimerPanier} from "../../services/PanierService";
import PanierTotal from "./PanierTotal";

function Panier(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [panier, setPanier] = useState([]);
    const [totalPanier, setTotalPanier] = useState(0);

    useEffect(() => {
        getContenuPanier()
            .then(result => {
                if (result === null) {
                    let msgError = new Array()
                    msgError['message'] = "Retour API sans réponse (result == null)"
                    setError(msgError)
                } else {
                    setPanier(result.data[0].panier);
                    setTotalPanier(result.data[1].totalPanier);
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
                            {/*TODO YC : Créer un total de panier*/}
                            <PanierTotal total={totalPanier}/>
                        </div>
                    </>)
            }
        </>
    )

}

export default Panier;