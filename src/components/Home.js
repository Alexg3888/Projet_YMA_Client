import React, {useState, useEffect} from "react";
import {useLocation, Link} from "react-router-dom";
import Video from "./Utils/Video";

function Home() {

    return (
        <>
            {/* <!-- Carousel  --> */}
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/HomePage/slideburger.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="/HomePage/slidepizza.jpg" className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            {/* <!-- Fin carousel --> */}

            {/* <!-- a propos --> */}
            <div className="container">
                <div className="row mt-5">
                    <div className="col mt-4">
                        <h2>Qui sommes-nous ?</h2>
                        <hr className="my-2"/>
                        <p>Bistrot House vous invite à découvrir son concept de cuisine ouverte et à 
                            venir déguster ses burgers préparés à la commande, ses frites fraîches maison et ses 
                            boisson et dessert maison. 
                            Le tout à un prix défiant toute concurrence.</p>
                        <p>Notre équipe sera ravie de vous accueillir à Lyon 6eme !</p> 
                        <p>Pas envie de sortir ? Nous réalisons également la livraison de repas à domicile à Lyon.</p>
                    </div>
                    {/* <div className="col"> */}
                        {/* <!-- Zone Video --> */}
                            <div className="col-auto mx-auto">
                                <Video
                                    width={550}
                                    poster={"/HomePage/video_poster.jpg"}
                                    source={"/HomePage/video_presentation.mp4"}
                                    type="video/mp4"
                                />
                            </div>
                        </div>
                        {/* <!-- Fin zone Video --> */}
                    </div>
                {/* </div> */}
        
            {/* <!-- fin a propos --> */}



            {/* <!-- picto zone --> */}
            <div id="pictofond">
                <div className="container mt-5 pb-3">
                    <div className="row text-center" id="picto">
                        <div className="col-sm mb-1 mt-3" id="nomPicto">
                            <img src="/HomePage/pizza.png" alt="..."/>
                            <h3 id="nomPicto">Pizza</h3>
                            <a href="/pizza"></a>
                        </div>
                        <div className="col-sm mb-1 mt-3" id="nomPicto">
                            <img src="/HomePage/burger.png" alt="..."/>
                            <h3 id="nomPicto">Burger</h3>
                        </div>
                        <div className="col-sm mb-1 mt-3" id="nomPicto">
                            <img src="/HomePage/boisson.png" alt="..."/>
                            <h3 id="nomPicto">Boisson</h3>
                        </div>
                        <div className="col-sm mb-1 mt-3" id="nomPicto">
                            <img src="/HomePage/dessert.png" alt="..."/>
                            <h3 id="nomPicto">Dessert</h3>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Fin picto zone --> */}

            {/* <!-- Zone banière --> */}
            <div className="container">
                <div className="row mt-4">
                    <div className="col mt-4"><Link to="/pizza"><img src="/HomePage/bannièrepizza.jpg" alt="..."
                                                    className="img-thumbnail"/></Link></div>
                    <div className="col mt-4"><Link to="/burger"><img src="/HomePage/bannièreburger.jpg" alt="..."
                                                   className="img-thumbnail"/></Link></div>
                    <div className="w-100"></div>
                    <div className="col mt-4"><Link to="/boisson"><img src="/HomePage/bannièreboisson.jpg" alt="..."
                                                   className="img-thumbnail"/></Link></div>
                    <div className="col mt-4"><Link to="/dessert"><img src="/HomePage/bannièredessert.jpg" alt="..."
                                                   className="img-thumbnail"/></Link></div>
                </div>
            </div>
            {/* <!-- Zone banière --> */}

            {/* <!-- Call to Action --> */}
           
                <div className="jumbotron">
                        <h1 className="display-4">Notre offre du moment</h1>
                        <hr className="my-4"/>
                        <p className="lead">Réservez dès maintenant pour bénéficier d'une remise de 20% sur le prix du Menu.</p>
                        <a className="btn btn-warning btn-lg" href="http://localhost:3000/contact" role="button">Commander</a>                  
                </div>

            {/* <!-- Fin Call to Action--> */}

            {/* <!-- Adresse + carte --> */}

            <div className="container">
                <div class="row mt-5 ">
                    <div class="col mt-5">
                    <h2 className="mb-4">Bistrot House</h2>
                        <h5>Adresse</h5>
                        <hr className="my-2"/>
                        <p>26 Boulevard Jules Favre, 69006 Lyon </p>
                        <h5>Contact</h5> 
                        <hr className="my-2"/> 
                        <p>06 06 06 06 06</p>
                        <p>Contact@Bistrot-House.com</p>
                        <h5>Horaire</h5> 
                        <hr className="my-2"/>
                        <p>Bistrot House vous accueille 7j/7 de 8h à 1h.</p>
                    </div>
                    <div className="col-auto mx-auto">
                    {/* <img src="/HomePage/carte.JPG" className="d-block w-100" alt="..."/> */}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.3565308084662!2d4.855894916201728!3d45.76404462140539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea89c07c6663%3A0x33ac6f782adc9be3!2s26%20Boulevard%20Jules%20Favre%2C%2069006%20Lyon!5e0!3m2!1sfr!2sfr!4v1598272714388!5m2!1sfr!2sfr" width="530" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </div>
            </div>
             {/* <!-- Fin Adresse + carte --> */}
        </>
    );
}

export default Home;