import React from "react";

const ProduitCard = (props) => {

    return (
        <>
            <div className="col-4">
                <div className="card my-3">
                    <img className="card-img-top" src={props.photo} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{props.nom}</h5>
                        <p className="card-text" style={{minHeight : 120}}>{props.description}</p>
                        <p className="card-text"><small className="text-muted">{props.prix} €</small></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProduitCard;
