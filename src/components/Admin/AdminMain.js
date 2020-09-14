import React, {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {getAdminVerifie} from "../../services/ApiService";
import Error from "../Error";
import Spinner from "../Utils/Spinner";

function AdminMain(props) {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [accesAutorise, setAccesAutorise] = useState(false);
    const history = useHistory();

    useEffect(() => {
        getAdminVerifie()
            .then((result) => {
                if (result.data['reponse'] !== 'Adminnistrateur vérifié') {
                    alert("Accès non autorisé à cette page")
                    history.push('/')
                } else {
                    setAccesAutorise(true)
                    setIsLoaded(true)
                }
            })
            .catch((e) => setError(e))
    }, [accesAutorise, isLoaded, history])

    if (error) {
        return (
            <>
                <div>Une erreur est survenue</div>
                <Error error={error}/>
            </>
        )
    } else if (!isLoaded) {
        return (<>
            <Spinner />
        </>)
    } else if (isLoaded && accesAutorise) {
        return (
            <>
                <div>
                    {/* <!-- Carousel  --> */}
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="/HomePage/slidevotrepanier.jpg" className="d-block w-100"
                                     alt="..."/>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Fin carousel --> */}
                    <div className="container">
                    <div className="text-center mx-4 mt-5">
                        <h1>Administration du site</h1>

                        <button type="button" className="btn btn-warning mx-4 my-3"><Link className='nav-link text-light' to="/enregistrerProduit">Enregistrer un nouveau produit</Link></button>
                        <button type="button" className="btn btn-warning mx-4 my-3"><Link className='nav-link text-light' to="/listeProduits">Modifier un produit</Link></button>
                        
                    </div>
                </div>
                </div>
            </>
        )
    }
}

export default AdminMain;