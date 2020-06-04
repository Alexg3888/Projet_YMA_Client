import React from "react";

const Pizza = (props) => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-8 col-md-5 col-lg-4 col-xl-3 m-auto">
                    <div className="card shadow mt-3 weather-card">
                        <div className="card-header text-center">
                            <h2>{props.nom}</h2>
                        </div>
                        <div className="">{props.prix}</div>
                        <div className=""><img src={props.photo}></img></div>
                        <div className="card-body">{props.description}</div>
                        <div className="card-footer text-center">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pizza;
