import Axios from "axios";
import { API_CATEGORIE_PRODUIT_ENDPOINT } from "../constants";

export const getCatProduitData = async () => {
  console.log(API_CATEGORIE_PRODUIT_ENDPOINT)
  return Axios.get(API_CATEGORIE_PRODUIT_ENDPOINT);
};