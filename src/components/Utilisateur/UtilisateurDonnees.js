import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {API_DONNEES_UTILISATEUR, API_DONNEES_UTILISATEUR_MAJ, API_INSCRIPTION} from "../../constants";
import Axios from "axios";
import {getDonneesUtilisateur, login} from "../../services/ApiService";
import {useHistory} from "react-router-dom";
import Error from "../Error";


function UtilisateurDonnees(props) {
    const {handleSubmit, register, errors} = useForm();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [donneesUtilisateur, setDonneesUtilisateur] = useState([]);

    const history = useHistory();

    useEffect(() => {
        getDonneesUtilisateur()
            .then(result => {
                setDonneesUtilisateur(result.data)
                setIsLoaded(true)
            })

    }, [])


    const onSubmit = values => {
        // console.log(values);
        return Axios.put(API_DONNEES_UTILISATEUR_MAJ, values,{headers: {'Authorization': 'Bearer ' + window.localStorage.token}} )
            .then(async (result) => {
                console.log(values)
                if (result.data['reponse'] == 'utilisateur modifie') {
                    alert('utilisateur enregistré et connecté')
                    history.push("/"); //redirection homepage
                }})

            //TODO YC : Gérer correctement l'erreur d'appel a l'API
            .catch(async (e) => {
                alert('erreur API BackEnd lors de l\'enregistrement du user , voir console')
                console.log(e)
            })
    }

    return (
        <>
            {
                (error) ?
                    (
                        <>
                            <div>Une erreur est survenue</div>
                            <Error error={error}/>
                        </>
                    )
                    : (<> {!isLoaded && (
                        <div className="d-flex justify-content-center pt-5">
                            <div className="spinner-grow text-warning" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    )}
                        {isLoaded && (
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    defaultValue= {donneesUtilisateur.utilisateur.email}
                                    name="email"
                                    ref={register({
                                        required: "Champs obligatoire",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                            message: "Email invalide"
                                        }
                                    })}/>
                                <small className="form-text text-muted text-warning">{errors.email && errors.email.message}</small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="prenom">Prénom</label>
                                <input
                                    className="form-control"
                                    name="prenom"
                                    defaultValue={donneesUtilisateur.utilisateur.prenom}
                                    ref={register({
                                        required: "Champs obligatoire",
                                        pattern: {
                                            value: /^[a-z ,.'-]+$/i,
                                            message: "Prenom invalide"
                                        }
                                    })}/>
                                <small className="form-text text-muted text-warning">{errors.prenom && errors.prenom.message}</small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="nom">Nom</label>
                                <input
                                    className="form-control"
                                    name="nom"
                                    defaultValue={donneesUtilisateur.utilisateur.nom}
                                    ref={register({
                                        required: "Champs obligatoire",
                                        pattern: {
                                            value: /^[a-z ,.'-]+$/i,
                                            message: "Nom invalide"
                                        }
                                    })}/>
                                <small className="form-text text-muted text-warning">{errors.nom && errors.nom.message}</small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="num">Numéro</label>
                                <input
                                    className="form-control"
                                    name="num"
                                    defaultValue={donneesUtilisateur.adresse.num}
                                    ref={register({
                                        required: "Champs obligatoire",
                                        pattern: {
                                            value: /^[1-9]\d{0,3}(?:[a-zA-Z]{1,2}\d{0,3})?$/i,
                                            message: "Numéro invalide"
                                        }
                                    })}/>
                                <small className="form-text text-muted text-warning">{errors.num && errors.num.message}</small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="rue">Rue</label>
                                <input
                                    className="form-control"
                                    name="rue"
                                    defaultValue={donneesUtilisateur.adresse.rue}
                                    ref={register({
                                        required: "Champs obligatoire",
                                        pattern: {
                                            value: /[A-Za-z0-9'\.\-\s\,]/i,
                                            message: "Rue invalide"
                                        }
                                    })}/>
                                <small className="form-text text-muted text-warning">{errors.rue && errors.rue.message}</small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="cp">Code postal</label>
                                <input
                                    className="form-control"
                                    name="cp"
                                    defaultValue={donneesUtilisateur.adresse.cp}
                                    ref={register({
                                        required: "Champs obligatoire",
                                        pattern: {
                                            value: /^(F-)?((2[A|B])|[0-9]{2})[0-9]{3}$/i,
                                            message: "Code Postal invalide"
                                        }
                                    })}/>
                                <small className="form-text text-muted text-warning">{errors.cp && errors.cp.message}</small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="ville">Ville</label>
                                <input
                                    className="form-control"
                                    name="ville"
                                    defaultValue={donneesUtilisateur.adresse.ville}
                                    ref={register({
                                        required: "Champs obligatoire",
                                        pattern: {
                                            value: /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/i,
                                            message: "Ville invalide"
                                        }
                                    })}/>
                                <small className="form-text text-muted text-warning">{errors.ville && errors.ville.message}</small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="telephone">Numéro de téléphone</label>
                                <input
                                    className="form-control"
                                    name="telephone"
                                    defaultValue={donneesUtilisateur.utilisateur.telephone}
                                    ref={register({
                                        required: "Champs obligatoire",
                                        pattern: {
                                            value: /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/i,
                                            message: "Telephone invalide"
                                        }
                                    })}/>
                                <small
                                    className="form-text text-muted text-warning">{errors.telephone && errors.telephone.message}</small>
                            </div>

                            <button type="submit" className="btn btn-warning">Mettre a jour</button>
                        </form>
                        )}
                    </>)
            }
        </>


    )

}

export default UtilisateurDonnees