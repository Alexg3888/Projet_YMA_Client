import React from "react";
import {Link, useHistory} from "react-router-dom";
import {deconnexion} from "../../services/authentificationService";

function BoutonUtilisateurConnecte(props) {
    const history = useHistory();

    return (
        <>
            <div className="row">
                {window.localStorage.getItem('useremail')}
            </div>
            <div className="row">
                <Link to="#" onClick={()=>{
                    props.handleLoginState(false)
                    deconnexion()
                    history.push("/")
                }}>Se déconnecter</Link>
            </div>
        </>
    )
}

export default BoutonUtilisateurConnecte;