import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import PizzaMain from "./Produits/PizzaMain";
import BurgerMain from "./Produits/BurgerMain";
import BoissonMain from "./Produits/BoissonMain";
import DessertMain from "./Produits/DessertMain";
import Contact from "./Contact";
import NotFound from "./NotFound";
import PanierMain from "./Panier/PanierMain";
import InscriptionMain from "./utilisateur/InscriptionMain";

class App extends Component {
    render = () => {
        return (
            <>
                <Router>
                    <Header/>
                    <div>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/pizza" component={PizzaMain}/>
                            <Route path="/burger" component={BurgerMain}/>
                            <Route path="/boisson" component={BoissonMain}/>
                            <Route path="/dessert" component={DessertMain}/>
                            <Route path="/contact" component={Contact}/>
                            <Route path="/panier" component={PanierMain}/>
                            <Route path="/inscription" component={InscriptionMain} />
                            <Route component={NotFound}/>
                        </Switch>
                    </div>
                </Router>
                <div className="mt-4"></div>
            </>
        );
    };
}

export default App;
