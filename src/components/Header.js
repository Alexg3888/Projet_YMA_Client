import React from "react";
import BoutonUtilisateurConnecte from "./Utilisateur/BoutonUtilisateurConnecte";
import {useLocation, Link} from "react-router-dom";
import BoutonSeConnecter from "./Utilisateur/BoutonSeConnecter";

function Header(props) {

    const location = useLocation()

    function isActive(name) {
        return name === location.pathname ? 'active' : null
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-lg navbar-light bg-white">
                        <Link className='navbar-brand' to="/"><img src="/HomePage/logo_nav.png"
                                                                   className="d-block w-100"
                                                                   alt="..."/></Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav mr-auto">
                                <li className={'nav-item ' + isActive('/')}>
                                    <Link className="nav-link" to="/">Accueil <span
                                        className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="/">
                                        Nos produits </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <ul className="list-unstyled">
                                            <li className={'nav-item ' + isActive('/pizza')}>
                                                <Link className='nav-link' to="/pizza">Pizza</Link>
                                            </li>
                                            <li className={'nav-item ' + isActive('/burger')}>
                                                <Link className='nav-link' to="/burger">Burger</Link>
                                            </li>
                                            <li className={'nav-item ' + isActive('/tapas')}>
                                                <Link className='nav-link' to="/tapas">Tapas</Link>
                                            </li>
                                            <li className={'nav-item ' + isActive('/boisson')}>
                                                <Link className='nav-link' to="/boisson">Boisson</Link>
                                            </li>
                                            <li className={'nav-item ' + isActive('/dessert')}>
                                                <Link className='nav-link' to="/dessert">Dessert</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className={'nav-item ' + isActive('/contact')}>
                                    <Link className='nav-link' to="/contact">Contact</Link>
                                </li>
                                {!props.loginState &&
                                <li className={'nav-item ' + isActive('/inscription')}>
                                    <Link className='nav-link' to="/inscription">Inscription</Link>
                                </li>}
                                <li className={'nav-item ' + isActive('/panier')}>
                                    <Link className='nav-link' to="/panier">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16"
                                             className="bi bi-basket2 mr-2 mb-1"
                                             fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd"
                                                  d="M1.111 7.186A.5.5 0 0 1 1.5 7h13a.5.5 0 0 1 .489.605l-1.5 7A.5.5 0 0 1 13 15H3a.5.5 0 0 1-.489-.395l-1.5-7a.5.5 0 0 1 .1-.42zM2.118 8l1.286 6h9.192l1.286-6H2.118z"/>
                                            <path fillRule="evenodd"
                                                  d="M11.314 1.036a.5.5 0 0 1 .65.278l2 5a.5.5 0 1 1-.928.372l-2-5a.5.5 0 0 1 .278-.65zm-6.628 0a.5.5 0 0 0-.65.278l-2 5a.5.5 0 1 0 .928.372l2-5a.5.5 0 0 0-.278-.65z"/>
                                            <path
                                                d="M4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zM0 6.5A.5.5 0 0 1 .5 6h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1z"/>
                                        </svg>
                                        Panier</Link>
                                </li>
                                {props.loginState &&
                                <li className={'nav-item ' + isActive('/utilisateur')}>
                                    <Link className='nav-link' to="/utilisateur">Mon compte</Link>
                                </li>}
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="col-auto d-flex">
                    {/*explication de la ligne ci-dessous :*/}
                    {/*props.loginState && <BoutonUtilisateurConnecte loginState={props.loginState}/>*/}
                    {/*Si auth.loginState est vrai, alors envoie ce qu'il y a apres le &&, si non renvoie false*/}
                    <div className="row">
                        <div className="col d-flex align-items-center">
                    <span className="btn btn-warning px-4 ml-2"> {props.loginState ?
                        <BoutonUtilisateurConnecte loginState={props.loginState}
                                                   handleLoginState={props.handleLoginState}/> :
                        <BoutonSeConnecter/>}
                    </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;