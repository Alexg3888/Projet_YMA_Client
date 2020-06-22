import React from "react";

const Header = () => (

  <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/"><img src="/HomePage/logo_nav.png" className="d-block w-100" alt="..."/></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">Accueil <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/pizza">Pizza</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/burger">Burger</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/boisson">Boisson</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/dessert">Dessert</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">Contact</a>
          </li>
            <li className="nav-item">
                <a className="nav-link" href="/panier">Panier</a>
            </li>
        </ul>
      </div>
    </nav>
);

export default Header;
