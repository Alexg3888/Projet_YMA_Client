import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {getAdminVerifie, getCatProduitData} from "../../services/ApiService";
import Error from "../Error";
import Axios from "axios";
import {API_ENREGISTRER_PRODUIT} from "../../constants";
import {useForm} from "react-hook-form";

function EnregistrerProduit(props) {
    const {handleSubmit, register, errors} = useForm();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [accesAutorise, setAccesAutorise] = useState(false);
    const [categoriesProduit, setCategoriesProduit] = useState([]);
    const history = useHistory();

    useEffect(() => {
        setIsLoading(true)
        getAdminVerifie()
            .then((result) => {
                if (!result.data['reponse'] === 'Adminnistrateur vérifié') {
                    alert("Accès non autorisé à cette page")
                    history.push('/')
                } else {
                    getCatProduitData()
                        .then((result) => {
                            let categories = []
                            for (let categorie of result.data["hydra:member"]) {
                                categories.push(categorie.nom)
                            }
                            setCategoriesProduit(categories)
                            setAccesAutorise(true)
                            setIsLoading(false)
                        })
                        .catch((e) => setError(e))
                }
            })
            .catch((e) => setError(e))
    }, [])

    const onSubmit = values => {
        setIsLoading(true)
        console.log(values)
        return Axios.post(API_ENREGISTRER_PRODUIT, values, {headers: {Authorization: "Bearer " + window.localStorage.token}})
            .then(async (result) => {
                if (result.data['reponse'] === 'Produit enregistré') {
                    alert("Produit enregistré")
                    history.push('/adminMain')
                }
            })
            .catch(async (e) => {
                alert('erreur API BackEnd lors de l\'enregistrement du produit, voir console')
                console.log(e)
            })
    }

    if (error) {
        return (
            <>
                <div>Une erreur est survenue</div>
                <Error error={error}/>
            </>
        )
    } else if (isLoading) {
        return (<>
            <div className="d-flex justify-content-center pt-5">
                <div className="spinner-grow text-warning" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </>)
    } else if (isLoading === false && accesAutorise === true) {
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
                        <h1>Administration du site : Enregistrer un nouveau produit</h1>

                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-group">
                                <label htmlFor="nom">Nom</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    defaultValue=""
                                    name="nom"
                                    ref={register({
                                        required: "Champs obligatoire",
                                        pattern: {
                                            value: /^[a-z ,.'-]+$/i,
                                            message: "Nom invalide"
                                        }
                                    })}/>
                                <small
                                    className="form-text text-muted text-warning">{errors.nom && errors.nom.message}</small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    defaultValue=""
                                    name="description"
                                    ref={register({
                                        required: "Champs obligatoire",
                                        pattern: {
                                            value: /^[a-z ,.'-]+$/i,
                                            message: "Description invalide"
                                        }
                                    })}/>
                                <small
                                    className="form-text text-muted text-warning">{errors.description && errors.description.message}</small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="prix">Prix</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    defaultValue=""
                                    name="prix"
                                    ref={register({
                                        required: "Champs obligatoire"
                                    })}/>
                                <small
                                    className="form-text text-muted text-warning">{errors.prix && errors.prix.message}</small>
                            </div>

                            <div className="form-group">
                                Promotion :
                                <pre>
                                    <input name="promo" type="radio" value="true" ref={register}/>
                                    <label htmlFor="true"> Oui      </label>
                                    <input name="promo" type="radio" value="false" ref={register}/>
                                    <label htmlFor="false"> Non</label>
                                </pre>
                            </div>

                            <div className="form-group">
                                Catégorie de produit :
                                <select name="categorie" ref={register}>
                                    {categoriesProduit.map(
                                        (cat)=> (
                                            <option value={cat}>{cat}</option>
                                        )
                                    )}
                                </select>
                            </div>

                            <button type="submit" className="btn btn-warning">Envoyer</button>
                        </form>
                    </div>
                </div>
            </>
        )
    } else {
        return (<></>)
    }
}

export default EnregistrerProduit;