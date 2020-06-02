import Axios from "axios";
import { API_URL } from "../constants";

export const getProduitData = async () => {
  const response = await Axios.get(`${API_URL}`);

  return response.data;
};
