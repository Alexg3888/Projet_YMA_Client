import React, {useEffect, useState} from "react";
import {useHistory, Link} from "react-router-dom";
import {getAdminVerifie, getCatProduitData} from "../../services/ApiService";
import Error from "../Error";
import Spinner from "../Utils/Spinner";

function ListeProduits() {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [accesAutorise, setAccesAutorise] = useState(false);
    const [produits, setProduits] = useState([]);
    const history = useHistory();

    useEffect(() => {
        setIsLoading(true)
        getAdminVerifie()
            .then((result) => {
                if (result.data['reponse'] !== 'Adminnistrateur vérifié') {
                    alert("Accès non autorisé à cette page")
                    history.push('/')
                } else {
                    getCatProduitData()
                        .then((result) => {
                            setProduits(result.data["hydra:member"])
                            setAccesAutorise(true)
                            setIsLoading(false)
                        })
                        .catch((e) => setError(e))
                }
            })
            .catch((e) => setError(e))
    }, [history])

    if (error) {
        return (
            <>
                <div>Une erreur est survenue</div>
                <Error error={error}/>
            </>
        )
    } else if (isLoading) {
        return (<>
            <Spinner/>
        </>)
    } else if (isLoading === false && accesAutorise === true) {


        return (
            <>
                {/* <!-- Carousel  --> */}
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="/HomePage/slidepageadmin.jpg" className="d-block w-100"
                                 alt="..."/>
                        </div>
                    </div>
                </div>
                {/* <!-- Fin carousel --> */}

                <div className="text-center mt-5 mb-5">
                    <h1>Administration du site : Modification de produits</h1>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <ul>
                                {produits.map((categorie, index) => (
                                        <>
                                            <li key={index}>
                                                {categorie.nom}
                                                <ul>
                                                    {categorie.produits.map((produit, index) => (
                                                            <>
                                                                <li key={index}><Link className="nav-link"
                                                                                      to={"/modifierProduit/" + produit.id}>
                                                                    {produit.nom} *** {produit.prix} € ***
                                                                </Link></li>
                                                            </>
                                                        )
                                                    )}
                                                </ul>
                                            </li>
                                        </>
                                    )
                                )}
                            </ul>
                        </div>

                        <div className="col mt-5 d-none d-md-block">
                            <img src="/HomePage/ListeProduits.jpg" className="d-block w-100 " alt="..."/>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col">
                            <button type="button" className="ml-5 mt-5 btn btn-warning"onClick={() => (history.push("/adminMain"))}>Retour</button>
                        </div>
                    </div>
                </div>


            </>
        )
    } else {
        return (<></>)
    }
}

export default ListeProduits;