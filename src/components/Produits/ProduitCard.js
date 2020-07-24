import React from "react";
import {ajouterProduitAuPanier} from "../../services/PanierService";

const ProduitCard = (props) => {

    return (
        <>
            <div className="col-4">
                <div className="card my-3">
                    <img className="card-img-top" src={props.photo} alt="Card image cap"/>
                    <div className="card-body">
                        <div className="shadow p-3 mb-5 bg-white rounded">
                        <h5 className="card-title">{props.nom}</h5>
                        <p className="card-text" style={{minHeight : 120}}>{props.description}</p>
                        <p className="text-muted">{props.prix} €</p>
                        </div>
                            <button type="button" className="btn btn-warning  btn-block" data-toggle="modal" data-target="#modal" onClick={()=>(ajouterProduitAuPanier(props.id))}>Ajouter au panier
                            </button>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="modalLabel">Panier</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            Vous avez bien ajouté un {props.nom} au panier
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProduitCard;
