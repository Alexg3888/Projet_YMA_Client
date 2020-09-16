import React from "react";
import {Link, useHistory} from "react-router-dom";
import {deconnexion} from "../../services/authentificationService";
import {getAdminVerifie} from "../../services/ApiService";

function BoutonUtilisateurConnecte(props) {
    const history = useHistory();

    return (
        <>
            <div className="row text-secondary" onClick={()=>{
                getAdminVerifie()
                    .then((result) => {
                        if (result.data['reponse'] === 'Adminnistrateur vérifié') {
                            history.push("/adminMain")
                        }
                    })
            }}>
                {window.localStorage.getItem('useremail')}
            </div>
            <div className="row text-dark">
                <div className="col align-items-center text-dark">
                    <Link className="text-dark" to="#" onClick={()=>{
                        props.handleLoginState(false)
                        deconnexion()
                        history.push("/")
                    }}>Se déconnecter</Link>
                </div>
            </div>
        </>
    )
}

export default BoutonUtilisateurConnecte;