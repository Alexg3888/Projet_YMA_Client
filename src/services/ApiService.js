import Axios from "axios";
import {
    API_CATEGORIE_PRODUIT_ENDPOINT,
    API_PANIER,
    API_LOGIN,
    API_VALIDATION_CDE,
    API_DONNEES_UTILISATEUR, API_HISTORIQUE_UTILSIATEUR, API_ADMIN_MAIN, API_PRODUIT
} from "../constants";
import jwt_decode from "jwt-decode";

export const getCatProduitData = () => {
    return Axios.get(API_CATEGORIE_PRODUIT_ENDPOINT, {headers: {'Authorization': 'Bearer ' + window.localStorage.token}})
        // TODO YC : Ne pas s'authentifier si echec de l appel a API_CATEGORIE_PRODUIT_ENDPOINT
        .catch(async (e) => {
            if (e.response.status === '401') {
                await login()
                return Axios.get(API_CATEGORIE_PRODUIT_ENDPOINT, {headers: {'Authorization': 'Bearer ' + window.localStorage.token}})
            } else {
                throw e
            }
        })

};

export const getProduit = ($id) => {
    return Axios.get(API_PRODUIT + "/" + $id)
        .catch(async (e) => {
            if (e.response.status === '401') {
                throw e
            }
        })

};


export const getHistorique = () => {
    return Axios.get(API_HISTORIQUE_UTILSIATEUR, {headers: {'Authorization': 'Bearer ' + window.localStorage.token}})
        .catch(async (e) => {
            if (e.response.status === '401') {
                await login()
                return Axios.get(API_HISTORIQUE_UTILSIATEUR, {headers: {'Authorization': 'Bearer ' + window.localStorage.token}})
            } else {
                throw e
            }
        })

};

export const getDonneesUtilisateur = () => {
    return Axios.get(API_DONNEES_UTILISATEUR, {headers: {'Authorization': 'Bearer ' + window.localStorage.token}})
        .catch(async (e) => {
            if (e.response.status === '401') {
                await login()
                return Axios.get(API_DONNEES_UTILISATEUR, {headers: {'Authorization': 'Bearer ' + window.localStorage.token}})
            } else {
                throw e
            }
        })

};

export const getAdminVerifie = () => {
    return Axios.get(API_ADMIN_MAIN, {headers: {'Authorization': 'Bearer ' + window.localStorage.token}})
        .catch(async (e) => {
            if (e.response.status === '401') {
                await login()
                return Axios.get(API_ADMIN_MAIN, {headers: {'Authorization': 'Bearer ' + window.localStorage.token}})
            } else {
                throw e
            }
        })
};


//MEMO : le async de cette fonction sert a attendre le retour de "Axios.post(API_LOGIN, jsonBody)" avant de faire le "window.localStorage.setItem"
export async function login(email, password) {
    const jsonBody = {
        "username": email,
        "password": password
    }
    const token = (await Axios.post(API_LOGIN, jsonBody)).data.token
    window.localStorage.setItem('token', token)
    const decodedToken = jwt_decode(token);
    window.localStorage.setItem('useremail', decodedToken.username)
    window.localStorage.setItem('dateToken', String(Math.round(new Date().getTime() / 1000)))
}

export async function getContenuPanier() {
    let idProduitsPanier = window.localStorage.getItem('panier');
        return Axios.get(API_PANIER, {params : {'idProduitsPanier' : encodeURIComponent(idProduitsPanier)}})
            .catch(async (e) => {
                throw e
            })
}

export async function postValidationPanier() {
    let panier = JSON.parse(window.localStorage.getItem('panier'));
    let jsonBody = {}
    jsonBody['idProduit'] = panier;
    return Axios.post(API_VALIDATION_CDE, jsonBody, {headers: {'Authorization': 'Bearer ' + window.localStorage.token}})
        .catch(async (e) => {
            if (e.response.status === '401') {
                await login()
                return Axios.post(API_VALIDATION_CDE, jsonBody, {headers: {'Authorization': 'Bearer ' + window.localStorage.token}})
            } else {
                throw e
            }
        })
}