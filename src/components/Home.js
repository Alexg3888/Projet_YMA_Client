import React, {useState, useEffect} from "react";
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

            {/* <!-- Zone Video --> */}
            <div className="container">
                <div className="row mt-5">
                    <div className="col-auto mx-auto">
                        <Video
                            width={900}
                            poster={"/HomePage/video_poster.jpg"}
                            source={"/HomePage/video_presentation.mp4"}
                            type="video/mp4"
                        />
                    </div>
                </div>
            </div>
            {/* <!-- Fin zone Video --> */}

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