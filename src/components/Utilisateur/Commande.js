import React from "react";

function Commande(props) {

    return (
        <>
            <div
                className="col-4 py-3 d-flex flex-wrap align-content-center justify-content-center border-bottom">{props.date_retrait}</div>
            <div
                className="col-4 py-3 d-flex flex-wrap align-content-center justify-content-center border-bottom">{props.emporte ? 'Commande à emporter' : 'Commande en livraison'}</div>
            <div
                className="col-4 py-3 d-flex flex-wrap align-content-center justify-content-center border-bottom">{props.prix_total} €</div>
            {/*<div*/}
            {/*    className="col-4 py-3 d-flex flex-wrap align-content-center justify-content-center border-bottom">*/}
            {/*    <button type="submit" className="btn btn-warning">Detail</button>*/}
            {/*</div>*/}
        </>
    )

}

export default Commande;