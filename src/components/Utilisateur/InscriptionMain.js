import React from "react";
import InscriptionFormulaire from "./InscriptionFormulaire";

function InscriptionMain(props) {

    return (
        <>
            <div className="container">
                <InscriptionFormulaire handleLoginState={props.handleLoginState}/>
            </div>
        </>
    )

}

export default InscriptionMain;