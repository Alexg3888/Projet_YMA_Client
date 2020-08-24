# FONCTIONNALITE DE PANIER

Afin de maintenir en mémoire le panier, nous avions trois solutions :

- La première consiste à créer un état général du panier dans notre composant parent le plus haut
    et de passer en parametre à ces enfants, une fonction permettant de l'ajout au panier.
    Toutes les autre fonctionnalité du panier seraient gérée dans la page panier.
    
- La deuxieme consiste à créer un hook personnalisé afin de maintenir dans celui-ci l'état du panier.
    Cela permettrait d'atteindre cet état à partir de n'importe quel composant sans utiliser
    le systeme de passation de fonction aux enfants.
    Ce pendant, le systeme de hook personnalisés semble complexe à appréhender
    
- La troisième solution serait d'utiliser le local storage du navigateur. Les données du panier ne comportant
    rien de sensible, uniquement les id produits, on peut tout à fait les stocker ici.
    
Nous avons donc choisi la 3e solution :

>Nous avons donc créer un fichier PanierService.js qui contiendra toutes nos
>fonctions métiers liées à la gestion du panier. Celui-ci est implementable de
>n'importe quelle partie du site et sans complexité.

>La fonction nommée ajouterProduitAuPanier() utilise les méthodes :
>
>- window.localStorage.getItem() pour écrire dans le local storage
>- window.localStorage.setItem() pour lire un élément du local storage
    
>Bout de code concerné :
    
```js
export const ajouterProduitAuPanier =  (idProduit) => {

    let panier = JSON.parse(window.localStorage.getItem('panier'));

    if (panier === null){
        panier = [idProduit]
    } else {
        panier.push(idProduit)
    }

    window.localStorage.setItem('panier', JSON.stringify(panier));

};
```
    
    
    
Piste d'amélioration :

    Insérer dans le panier du local storage les infos produit 
    nom, description, photo et prix afin d'éviter la requete
    à l'API pour l'affichage du panier. 
   