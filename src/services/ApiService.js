import Axios from "axios";
import { API_URL } from "../constants";

export const getCatProduitData = async () => {
  return Axios.get(API_URL + "/api/categorie_produits");
};
