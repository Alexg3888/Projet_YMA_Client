import React, { Component } from "react";
import Header from "./Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import PizzaMain from "./Produits/PizzaMain";
import BurgerMain from "./Produits/BurgerMain";
// import Home from "./Home";

class App extends Component {
  render = () => {
    return (
      <>
        <Header />
        <Router>
          <div>
            <Switch>
              <Route path="/pizza" component={PizzaMain} />
                <Route path="/burger" component={BurgerMain} />
              {/* <Route exact path="/" component={Home} /> */}
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
        <div className="mt-4"></div>
      </>
    );
  };
}

export default App;
