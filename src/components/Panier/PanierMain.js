import React from "react";
import Panier from "./Panier";
import {supprimerPanier} from "../../services/PanierService";
import {checkTokenValidity} from "../../services/authentificationService";
import {useHistory} from "react-router-dom";

function PanierMain(props) {

    const history = useHistory();

    //Vérifie la validité du token et se déconnecte si expiré
    props.handleLoginState(checkTokenValidity())

    return (
        <>

            {/* <!-- Carousel  --> */}
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/HomePage/slidevotrepanier.jpg" className="d-block w-100" alt="..."/>
                    </div>
                </div>
            </div>
            {/* <!-- Fin carousel --> */}
            <div className="container">

                <Panier/>

                {/*TODO YC : Rafraichir le panier une fois celui-ci supprimer*/}

                {/*****Bouton vider le panier*/}
                <div className="row">
                    <div className="col-md text-center ml-5">
                        <button type="button" className="btn btn-warning mt-5" onClick={() => {
                            supprimerPanier()
                            alert('Votre panier a été vidé')
                            history.push("/")
                        }}>
                            Vider mon panier

                        </button>
                        {/*****FIN Bouton vider le panier*/}
                    </div>
                    <div className="col text-center">
                        {/*****Bouton valider le panier*/}
                        <button type="button" className="btn btn-warning mt-5 ml-5" onClick={() => {
                            let panier = window.localStorage.getItem('panier');
                            if (panier !== '[]') {
                                if (!props.loginState) {
                                    alert("Veuillez vous connecter avant de valider la commande")
                                } else {
                                    history.push("/validationPanier")
                                }
                            } else {
                                alert("Panier vide, impossible de valider la commande")
                            }
                        }}>
                            Valider commande
                        </button>
                        {/*****FIN Bouton valider le panier*/}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PanierMain;