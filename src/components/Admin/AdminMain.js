import React, {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {getAdminVerifie, postValidationPanier} from "../../services/ApiService";
import Error from "../Error";

function AdminMain(props) {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [accesAutorise, setAccesAutorise] = useState(false);
    const history = useHistory();

    useEffect(() => {
        getAdminVerifie()
            .then(async (result) => {
                if (!result.data['reponse'] === 'Adminnistrateur vérifié') {
                    alert("Accès non autorisé à cette page")
                    history.push('/')
                } else {
                    setAccesAutorise(true)
                    setIsLoaded(true)
                }
            })
            .catch((e) => setError(e))
    }, [accesAutorise, isLoaded])

    if (error) {
        return (
            <>
                <div>Une erreur est survenue</div>
                <Error error={error}/>
            </>
        )
    } else if (!isLoaded) {
        return (<>
            <div className="d-flex justify-content-center pt-5">
                <div className="spinner-grow text-warning" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
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

                    <div className="text-center">
                        <h1>Administration du site</h1>

                        <ul>
                            <li><Link className='nav-link' to="/enregistrerProduit">Enregistrer un nouveau produit</Link></li>
                        </ul>

                    </div>
                </div>
            </>
        )
    }
}

export default AdminMain;