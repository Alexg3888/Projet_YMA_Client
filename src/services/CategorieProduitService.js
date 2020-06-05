
/**
 * Renvois la listes des produits d'une catégorie
 * @param categorieRecherchee Nom de la catégorie à rechercher
 * @param categoriesProduits Réponse de l'API sur https://127.0.0.1:8000/api/categorie_produits
 * @returns {null|any} null ou détail d'une catégorie
 */
export const rechercheProduitsParCategorie =  (categorieRecherchee , categoriesProduits) => {
    for (let categorieProduit of categoriesProduits.data['hydra:member']){
        if (categorieProduit.nom == categorieRecherchee ){
            return categorieProduit
        }
    }
    return null;
};