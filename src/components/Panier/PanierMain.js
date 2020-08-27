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
            <div className="container mt-5">
            
                <Panier />

                {/*TODO YC : Rafraichir le panier une fois celui-ci supprimer*/}

                {/*****Bouton vider le panier*/}
                <button type="button" className="btn btn-warning mt-5" onClick={()=> {
                    supprimerPanier()
                    history.push("/")
                }}>
                    Vider le panier
                </button>
                {/*****FIN Bouton vider le panier*/}
                {/*****Bouton vider le panier*/}
                <button type="button" className="btn btn-warning mt-5 ml-5" onClick={()=>(history.push("/validationPanier"))}>
                    Valider le panier
                </button>
                {/*****FIN Bouton vider le panier*/}
            </div>
        </>
    )
}

export default PanierMain;