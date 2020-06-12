import React from "react";
import {supprimerPanier} from "../../services/PanierService";

function PanierTotal(props) {

    return (
        <>
            <button type="button" className="btn btn-secondary btn-lg btn-block" onClick={()=>(supprimerPanier())}>
                Total : {props.total} €
            </button>
        </>
    )

}

export default PanierTotal;