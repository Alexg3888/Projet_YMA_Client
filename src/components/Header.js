import React from "react";

const Header = () => (
  <ul className="nav justify-content-center">
    <li className="nav-item">
      <a className="nav-link active" href="/">Accueil</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/pizza">Pizza</a>
    </li>
      <li className="nav-item">
          <a className="nav-link" href="/burger">Burger</a>
      </li>
    <li className="nav-item">
      <a className="nav-link" href="/contact">Contact</a>
    </li>
    <li className="nav-item">
      <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Mon compte</a>
    </li>
  </ul>
);

export default Header;
