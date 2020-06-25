import React from "react";
import {Link} from "react-router-dom";
import {deconnexion} from "../../services/authentificationService";

function BoutonUtilisateurConnecte(props) {
    return (
        <>
            <div className="row">
                {window.localStorage.getItem('useremail')}
            </div>
            <div className="row">
                <Link to="#" onClick={()=>{
                    props.handleLoginState(false)
                    deconnexion()
                }}>Se déconnecter</Link>
            </div>
        </>
    )
}

export default BoutonUtilisateurConnecte;