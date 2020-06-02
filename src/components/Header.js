import React from "react";

const Header = () => (
  <ul class="nav justify-content-center">
    <li class="nav-item">
      <a class="nav-link active" href="/">Accueil</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/pizza">Pizza</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/contact">Contact</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Mon compte</a>
    </li>
  </ul>
);

export default Header;
