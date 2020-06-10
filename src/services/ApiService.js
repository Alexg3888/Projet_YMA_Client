import Axios from "axios";
import { API_CATEGORIE_PRODUIT_ENDPOINT, API_LOGIN } from "../constants";

export const getCatProduitData = () => {
  return Axios.get(API_CATEGORIE_PRODUIT_ENDPOINT, {headers : {'Authorization' : 'Bearer ' + window.localStorage.token}})
  .catch(async (e)=>{
    if (e.response.status == '401'){
      await login()
      return Axios.get(API_CATEGORIE_PRODUIT_ENDPOINT, {headers : {'Authorization' : 'Bearer ' + window.localStorage.token}})
    } else {throw e}
  })

};

//MEMO : le async de cette fonction sert a attendre le retour de "Axios.post(API_LOGIN, jsonBody)" avant de faire le "window.localStorage.setItem"
export async function login(email, password){
  email = "user4auth"
  password = "%!password4auth!%"
  const jsonBody = {
    "username": email,
    "password": password
  }
  const token = (await Axios.post(API_LOGIN, jsonBody)).data.token
  window.localStorage.setItem('token', token)
}