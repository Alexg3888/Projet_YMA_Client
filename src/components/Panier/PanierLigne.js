import React from "react";

function PanierLigne(props) {

    return (
        <>  
            <div className="col-4 mt-2 mb-1 d-flex flex-wrap align-content-center justify-content-end"><img className="miniproduit" src={props.photo} alt="image"/></div>
            <div className="col-4 mt-3 mb-2 d-flex flex-wrap align-content-center justify-content-start">{props.nom}</div>
            <div className="col-4 mt-3 mb-2 d-flex flex-wrap align-content-center justify-content-start">{props.prix} € </div>
        </>
    )

}

export default PanierLigne;