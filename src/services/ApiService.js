import Axios from "axios";
import {API_CATEGORIE_PRODUIT_ENDPOINT, API_PANIER, API_LOGIN} from "../constants";
import {supprimerPanier} from "./PanierService";

export const getCatProduitData = () => {
    return Axios.get(API_CATEGORIE_PRODUIT_ENDPOINT, {headers: {'Authorization': 'Bearer ' + window.localStorage.token}})
        .catch(async (e) => {
            if (e.response.status == '401') {
                await login()
                return Axios.get(API_CATEGORIE_PRODUIT_ENDPOINT, {headers: {'Authorization': 'Bearer ' + window.localStorage.token}})
            } else {
                throw e
            }
        })

};

//MEMO : le async de cette fonction sert a attendre le retour de "Axios.post(API_LOGIN, jsonBody)" avant de faire le "window.localStorage.setItem"
export async function login(email, password) {
    email = "user4auth"
    password = "%!password4auth!%"
    const jsonBody = {
        "username": email,
        "password": password
    }
    const token = (await Axios.post(API_LOGIN, jsonBody)).data.token
    window.localStorage.setItem('token', token)
}

export async function getContenuPanier() {
    let jsonBody = window.localStorage.getItem('panier');
    if (jsonBody === null) {
        console.log("y a 1 erreur")
        supprimerPanier()
        jsonBody = window.localStorage.getItem('panier');
    }
    // TODO YC : Prevoir le cas ou le localstorage contient une chaine invalide et qui fait planter le parse
    jsonBody = JSON.parse(jsonBody)
    if (jsonBody == "[]"){
        // TODO YC : Eviter de faire la requete si le panier est vide
    }
    return Axios.post(API_PANIER, jsonBody, {headers: {'Authorization': 'Bearer ' + window.localStorage.token}})
        .catch(async (e) => {
            if (e.response.status == '401') {
                await login()
                return Axios.post(API_PANIER, jsonBody, {headers: {'Authorization': 'Bearer ' + window.localStorage.token}})
            } else {
                throw e
            }
        })

}