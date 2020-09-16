import React, {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import {getAdminVerifie, getCatProduitData, getProduit} from "../../services/ApiService";
import Error from "../Error";
import Axios from "axios";
import {API_PRODUIT_MAJ} from "../../constants";
import {useForm} from "react-hook-form";
import Spinner from "../Utils/Spinner";

function ModifierProduit() {
    const {handleSubmit, register, errors} = useForm();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [accesAutorise, setAccesAutorise] = useState(false);
    const [categoriesProduit, setCategoriesProduit] = useState([]);
    const [produit, setProduit] = useState(null);
    const history = useHistory();

    let params = useParams();

    useEffect(() => {
        // setIsLoading(true)
        getAdminVerifie()
            .then((result) => {
                if (result.data['reponse'] !== 'Adminnistrateur vérifié') {
                    alert("Accès non autorisé à cette page")
                    history.push('/')
                } else {
                    getProduit(params.id)
                        .then((result) => {
                            setProduit(result.data)
                            setAccesAutorise(true)
                            setIsLoading(false)
                        })
                        .catch((e) => setError(e))
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
    }, [history, params.id])

    const onSubmit = values => {
        setIsLoading(true);
        values['id']=produit.id
        return Axios.put(API_PRODUIT_MAJ, values, {headers: {Authorization: "Bearer " + window.localStorage.token}})
            .then(async (result) => {
                if (result.data['reponse'] === 'Produit modifie') {
                    alert("Produit modifié avec succès")
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
            <Spinner />
        </>)
    } else if (isLoading === false && accesAutorise === true && produit !== null) {


        return (
            <>
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

                <div className="text-center mt-5 mb-2">
                    <h1>Administration du site : Modification produit (id : {produit.id})</h1>
                    <img src={produit.photo} className="modifProduitImg" alt="produit" />
                </div>
                <div className="container">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-group">
                            <label htmlFor="nom">Nom</label>
                            <input
                                type="text"
                                className="form-control"
                                defaultValue={produit.nom}
                                name="nom"
                                ref={register({
                                    required: "Champs obligatoire",
                                    pattern: {
                                        value: /^[0-9a-z ,.'-]+$/i,
                                        message: "Nom invalide"
                                    }
                                })}/>
                            <small
                                className="form-text text-danger">{errors.nom && errors.nom.message}</small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input
                                type="text"
                                className="form-control"
                                defaultValue={produit.description}
                                name="description"
                                ref={register({
                                    required: "Champs obligatoire"
                                })}/>
                            <small
                                className="form-text text-danger">{errors.description && errors.description.message}</small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="prix">Prix</label>
                            <input
                                type="text"
                                className="form-control"
                                defaultValue={produit.prix}
                                name="prix"
                                ref={register({
                                    required: "Champs obligatoire",
                                    pattern: {
                                        value: /^[0-9]+(\.|)[0-9]{0,2}$/g,
                                        message: "Prix invalide (2 décimales maximum, pas de devise)"
                                    }
                                })}/>
                            <small
                                className="form-text text-danger">{errors.prix && errors.prix.message}</small>
                        </div>

                        <div className="form-group">
                            Promotion :
                            <pre>
                                {produit.promo ? <input name="promo" type="radio" value="true" ref={register({
                                    required: "Champs obligatoire"
                                })
                                } checked /> :  <input name="promo" type="radio" value="true" ref={register({
                                    required: "Champs obligatoire"
                                })
                                }/>}
                                <label htmlFor="true"> Oui      </label>
                                {produit.promo ? <input name="promo" type="radio" value="false" ref={register({
                                    required: "Champs obligatoire"
                                })
                                }/> : <input name="promo" type="radio" value="false" ref={register({
                                    required: "Champs obligatoire"
                                })
                                } checked />}
                                <label htmlFor="false"> Non</label>
                            </pre>
                        </div>

                        <div className="form-group">
                        <label htmlFor="inputState">Catégorie de produit :</label>
                                <select className="form-control" name="categorie" ref={register}>
                                {categoriesProduit.map(
                                    (cat)=> (
                                        produit.categorieProduit.nom === cat ? <option value={cat} selected>{cat}</option> : <option value={cat}>{cat}</option>
                                    )
                                )}
                            </select>
                        </div>

                        <button type="submit" className="btn btn-warning">Envoyer</button>
                    </form>
                </div>

            </>
        )
    } else {
        return (<></>)
    }
}

export default ModifierProduit;