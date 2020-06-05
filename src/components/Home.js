import React, {useState, useEffect} from "react";
// import Error from "../Error";
// import {getOffreMomentData} from "../../services/ApiService";

function Home() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(true);
    const [offres, setOffres] = useState([]);

    // useEffect(() => {
    //     getOffreMomentData()
    //         .then(result =>setOffres(result.data['hydra:member']))
    //         .catch((error) => setError(error))
    //         .finally(() => setIsLoaded(true))
    // }, [])

    // if (error) {
    //     return (
    //         <>
    //             <div>Une erreur est survenue</div>
    //             <Error error={error} />
    //         </>
    //     )
    // } else if (!isLoaded) {
    //     return <div>Chargement...</div>;
    // } else {
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
                    <div className="col">
                        <h2>A propos</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. </p>
                    </div>
                    <div className="col">
                        <img src="/HomePage/photo_home.jpg" alt="..." className="img-thumbnail"/>
                    </div>
                </div>
            </div>
            {/* <!-- fin a propos --> */}

            {/* <!-- picto zone --> */}
            <div id="pictofond">

                <div className="container">
                    <div className="row text-center" id="picto">


                        <div className="col-sm mb-1 mt-3" id="nomPicto">
                            <img src="/HomePage/Pizza.png" alt="..."/>
                            <h3 id="nomPicto">Pizza</h3>
                        </div>
                        <div className="col-sm mb-1 mt-3" id="nomPicto">
                            <img src="/HomePage/Burger.png" alt="..."/>
                            <h3>Burger</h3>
                        </div>
                        <div className="col-sm mb-1 mt-3" id="nomPicto">
                            <img src="/HomePage/Boisson.png" alt="..."/>
                            <h3>Boisson</h3>
                        </div>
                        <div className="col-sm mb-1 mt-3" id="nomPicto">
                            <img src="/HomePage/dessert.png" alt="..."/>
                            <h3>dessert</h3>
                        </div>


                    </div>
                </div>

            </div>
            {/* <!-- Fin picto zone --> */}

            {/* <!-- Zone banière --> */}

            <div className="container">
                <div className="row mt-4">
                    <div className="col mt-4"><img src="/HomePage/bannièrepizza.jpg" alt="..."
                                                   className="img-thumbnail"/></div>
                    <div className="col mt-4"><img src="/HomePage/bannièreburger.jpg" alt="..."
                                                   className="img-thumbnail"/></div>
                    <div className="w-100"></div>
                    <div className="col mt-4"><img src="/HomePage/bannièreboisson.jpg" alt="..."
                                                   className="img-thumbnail"/></div>
                    <div className="col mt-4"><img src="/HomePage/bannièredessert.jpg" alt="..."
                                                   className="img-thumbnail"/></div>
                </div>
            </div>

            {/* <!-- Fin Zone banière --> */}


        </>
    );
}


export default Home;