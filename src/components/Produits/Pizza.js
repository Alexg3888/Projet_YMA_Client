import React from "react";

const Pizza = ({ nom, description, prix, photo, promo, onClickHandler }) => {

  return (
    <div className="container">
      <div className="row">
        <div className="col-8 col-md-5 col-lg-4 col-xl-3 m-auto">
          <div className="card shadow mt-3 weather-card">
            <div className="card-header text-center">
              <h2>{nom}</h2>
            </div>
            <div className="">{prix}</div>
            <div className=""><img src={photo}></img></div>
            <div className="">{promo}</div>
            <div className="card-body">{description}</div>
            <div className="card-footer text-center">
              {/* <a href={`/`} className="btn btn-primary" onClick={onClickHandler}>Ajouter</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
