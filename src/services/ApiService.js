import Axios from "axios";
import { API_CATEGORIE_PRODUIT_ENDPOINT } from "../constants";

export const getCatProduitData = async () => {
  console.log(API_CATEGORIE_PRODUIT_ENDPOINT)
  //window.localStorage.setItem('token', 'valeurdutoken')
  return Axios.get(API_CATEGORIE_PRODUIT_ENDPOINT);
};