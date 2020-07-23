import React from "react";
import {useLocation, Link} from "react-router-dom";

function Footer() {
    return ( 
    <footer className="fixed-bottom" style={{ backgroundColor: '#333333' }}>
        <div className="container-fluid" style={{ fontSize: '12px', height: '40px' }}>
            <div className="row display-footer">
                <div className="text-light text-left col-4 pl-5 d-flex flex-wrap align-content-center justify-content-start">
                    Copyright <i className="fab fa-creative-commons mr-1"></i> 2020 / Tous droits réservés.
                </div>
                <div className="text-center col-4 d-flex flex-wrap align-content-center justify-content-center">
                <img src="/HomePage/logo_nav_blanc.png" className="d-block mt-1" alt="..." height="34px" width="90px"/>
                </div>
                <div className="text-light text-right col-4 pr-5 d-flex flex-wrap align-content-center justify-content-end">
                    <Link className='nav-link text-white' to="/contact">Contact</Link>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer;