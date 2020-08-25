﻿import React from "react";
import {useLocation, Link} from "react-router-dom";

function Footer() {
    return ( 
    <footer id="sticky-footer" className="py-4 mt-5 bg-dark text-white">
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <small>Copyright &copy; Bristrot House 2020</small>
                </div>
                 <div className="col-sm d-flex flex-wrap align-content-center justify-content-center">
                    <img src="/HomePage/logo_nav_blanc.png" className="d-block"></img>                                        
                </div>
                <div className="col-sm text-right">
                    <a href="/Contact">Contact</a>                              
                </div>
            </div>
        </div>
    </footer>

    )
}



export default Footer;