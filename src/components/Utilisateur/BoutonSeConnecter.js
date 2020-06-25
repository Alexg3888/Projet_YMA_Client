import React from "react";
import {Link} from "react-router-dom";

function BoutonSeConnecter(props) {
    return (
        <>
            <div className="row">
                <Link to="/connexion">Se Connecter</Link>
            </div>
        </>
    )
}

export default BoutonSeConnecter;