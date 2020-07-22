import React from "react";

const Contact = () => {

  return (
      <>
                  {/* <!-- Carousel  --> */}
                  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/HomePage/slidepagecontact.jpg" className="d-block w-100" alt="..."/>
                    </div>
                </div>
            </div>
            {/* <!-- Fin carousel --> */}
            {/* <!-- Adresse + carte --> */}

            <div className="container">
                <div class="row mt-5 ">
                    <div class="col">
                    <h2>Bistrot House</h2>
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
                    <div className="col">
                    <img src="/HomePage/carte.JPG" className="d-block w-100" alt="..."/>
                    </div>
                </div>
            </div>
             {/* <!-- Fin Adresse + carte --> */}
    </>
  );
}

export default Contact;