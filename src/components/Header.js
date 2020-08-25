import React from "react";
import BoutonUtilisateurConnecte from "./Utilisateur/BoutonUtilisateurConnecte";
import {useLocation, Link} from "react-router-dom";
import BoutonSeConnecter from "./Utilisateur/BoutonSeConnecter";

function Header(props) {

    const location = useLocation()

    function isActive (name){
        return name == location.pathname ? 'active' : null
    }

    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <a className="navbar-brand" href="/"><img src="/HomePage/logo_nav.png" className="d-block w-100"
                                                          alt="..."/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className={'nav-item ' + isActive('/')}>
                            <Link className="nav-link" to="/">Accueil <span className="sr-only">(current)</span></Link>
                        </li>
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
                        <li className={'nav-item ' + isActive('/contact')}>
                            <Link className='nav-link' to="/contact">Contact</Link>
                        </li>
                        <li className={'nav-item ' + isActive('/panier')}>
                            <Link className='nav-link' to="/panier">Panier</Link>
                        </li>
                        {!props.loginState &&
                        <li className={'nav-item ' + isActive('/inscription')}>
                            <Link className='nav-link' to="/inscription">Inscription</Link>
                        </li>}
                    </ul>

                    {/*explication de la ligne ci-dessous :*/}
                    {/*props.loginState && <BoutonUtilisateurConnecte loginState={props.loginState}/>*/}
                    {/*Si auth.loginState est vrai, alors envoie ce qu'il y a apres le &&, si non renvoie false*/}
                    <span className="navbar-text"> {props.loginState ?  <BoutonUtilisateurConnecte loginState={props.loginState} handleLoginState={props.handleLoginState}/> : <BoutonSeConnecter />} </span>
                </div>
            </nav>
        </div>
    )
};

export default Header;
