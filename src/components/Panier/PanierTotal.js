import React from "react";
import {supprimerPanier} from "../../services/PanierService";

function PanierTotal(props) {

    return (
        <>
            <button type="button" className="btn btn-secondary btn-lg btn-block mt-5" onClick={()=>(supprimerPanier())}>
                Total : {props.total.toFixed(2)} €
            </button>
        </>
    )

}

export default PanierTotal;