export const API_URL = `${process.env.REACT_APP_SYMFONY_APP_URL}/api`;
export const API_AUTH_URL = `${process.env.REACT_APP_SYMFONY_APP_URL}/profile`;
export const API_ADMIN_URL = `${process.env.REACT_APP_SYMFONY_APP_URL}/admin`;
export const API_CATEGORIE_PRODUIT_ENDPOINT = API_URL + '/categorie_produits';
export const API_LOGIN = API_URL + '/login_check';
export const API_PANIER = API_URL + '/panier';
export const API_INSCRIPTION = API_URL + '/inscription';
export const API_VALIDATION_CDE = API_AUTH_URL + '/validationPanier';
export const API_DONNEES_UTILISATEUR = API_AUTH_URL + '/donneesUtilisateur';
export const API_DONNEES_UTILISATEUR_MAJ = API_AUTH_URL + '/donneesUtilisateurMaj';
export const API_HISTORIQUE_UTILSIATEUR = API_AUTH_URL + '/histoCommandes';
export const API_ADMIN_MAIN = API_ADMIN_URL + '/adminMain';
export const API_ENREGISTRER_PRODUIT = API_ADMIN_URL + '/enregistrerProduit';
// TODO YC : Repasser la durée du token à 1h
export const TOKEN_TTL = 36000;
