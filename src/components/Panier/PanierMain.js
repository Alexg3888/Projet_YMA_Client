import React from "react";
import Panier from "./Panier";
import {supprimerPanier} from "../../services/PanierService";

function PanierMain() {

    return (
        <>
            <div className="container">
                <div><h1>PANIER</h1></div>

                <Panier />

                {/*TODO YC : Rafraichir le panier une fois celui-ci supprimer*/}

                {/*****Bouton vider le panier*/}
                <button type="button" className="btn btn-secondary btn-lg btn-block" onClick={()=>(supprimerPanier())}>Vider le panier
                </button>
                {/*****FIN Bouton vider le panier*/}
            </div>
        </>
    )

}

export default PanierMain;