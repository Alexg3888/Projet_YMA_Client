import React from "react";

const ModalProduit = () => {

    return (
        <>
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
                            Vous avez bien ajouté ce produit a votre panier.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalProduit;
