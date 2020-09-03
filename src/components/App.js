import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import PizzaMain from "./Produits/PizzaMain";
import BurgerMain from "./Produits/BurgerMain";
import BoissonMain from "./Produits/BoissonMain";
import DessertMain from "./Produits/DessertMain";
import Contact from "./Contact";
import NotFound from "./NotFound";
import PanierMain from "./Panier/PanierMain";
import InscriptionMain from "./Utilisateur/InscriptionMain";
import {checkTokenValidity, deconnexion} from "../services/authentificationService";
import ConnexionMain from "./Utilisateur/ConnexionMain";
import TapasMain from "./Produits/TapasMain";
import validationPanier from "./Panier/ValidationPanier";
import ValidationPanier from "./Panier/ValidationPanier";
import UtilisateurMain from "./Utilisateur/UtilisateurMain";
import Historique from "./Utilisateur/Historique";

function App() {
    const [loginState, setLoginState] = useState(checkTokenValidity());

    function handleLoginState(etat) {
        setLoginState(etat)
        if (loginState && !etat) {
            deconnexion()
            alert('Session expirée, veuillez vous reconnecter')
        }
    }

    return (
        <>
            <Router>
                <Header loginState={loginState} handleLoginState={setLoginState}/>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/pizza" component={PizzaMain}/>
                        <Route path="/burger" component={BurgerMain}/>
                        <Route path="/tapas" component={TapasMain}/>
                        <Route path="/boisson" component={BoissonMain}/>
                        <Route path="/dessert" component={DessertMain}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/utilisateur" component={UtilisateurMain}/>
                        <Route path="/historique" component={Historique}/>
                        <Route path="/validationPanier" component={ValidationPanier}/>
                        <Route path="/connexion" render={(props) => <ConnexionMain {...props}
                                                                             handleLoginState={(etat) => handleLoginState(etat)}/>}/>
                        <Route path="/panier" render={(props) => <PanierMain {...props}
                                                                             handleLoginState={(etat) => handleLoginState(etat)} loginState={loginState}/>}/>
                        <Route path="/inscription" render={(props) => <InscriptionMain {...props}
                                                                                       handleLoginState={(etat) => handleLoginState(etat)}/>}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
                <Footer />
            </Router>
        </>
    )
}

export default App;
