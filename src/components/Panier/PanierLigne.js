import React from "react";

function PanierLigne(props) {

    return (
        <>

                <div className="col-4"><img className="miniproduit" src={props.photo} alt="image"/></div>
                <div className="col-4">{props.nom}</div>
                <div className="col-4">{props.prix} €</div>
        </>
    )

}

export default PanierLigne;