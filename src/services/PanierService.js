/**
 * Ajoute à la variable panier du localstorage un idProduit
 * @param idProduit
 */
export const ajouterProduitAuPanier =  (idProduit) => {

    let panier = JSON.parse(window.localStorage.getItem('panier'));

    if (panier === null){
        panier = [idProduit]
    } else {
        panier.push(idProduit)
    }

    window.localStorage.setItem('panier', JSON.stringify(panier));

};

export function supprimerPanier(){
    window.localStorage.setItem('panier', "[]")
}