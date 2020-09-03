import React from "react";

function PanierLigne(props) {
  return (
    <>
      <div className="col-4 py-3 d-flex flex-wrap align-content-center justify-content-center border-bottom">
        <img className="miniproduit" src={props.photo} alt={props.nom} />
      </div>
      <div className="col-4 py-3 d-flex flex-wrap align-content-center justify-content-center border-bottom">
        {props.nom}
      </div>
      <div className="col-4 py-3 d-flex flex-wrap align-content-center justify-content-center border-bottom">
        {props.prix} €{" "}
      </div>
    </>
  );
}

export default PanierLigne;
