import React from "react";

import OwlCarousel from "react-owl-carousel";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router";

function Banner() {

  return (

    
    <section className="tm-banner">

      <OwlCarousel items="1" loop="true" autoplay="true" dots={false} nav={true}
        className="owl-theme"
      
      >

        {/* Slide 1 */}
        <div className="item">
          <div className="tm-banner-inner">
            <h1 className="tm-banner-title">
              Find <span className="tm-yellow-text" style={{    fontWeight: '900',}}>The Best</span> Place
            </h1>

            <p className="tm-banner-subtitle" style={{    fontSize: '56px',
    fontFamily: 'fangsong',
    marginBottom: '-14px',}}>
              For Your needs
            </p>

            <Link to="/store" className="tm-banner-link" >
              Shop Now<i
            className="fa-solid fa-arrow-right-long ml-5"
         
          ></i>
            </Link>
          </div>

          <img src="/img/banner-1.png" alt="Banner 1" className="img-banner"    style={{
        width: "100%",
    aspectRatio: "16 / 6",
    objectFit: "cover",
    display: "block"

    }} />
        </div>

        {/* Slide 2 */}
        <div className="item">
          <div className="tm-banner-inner">
            <h1 className="tm-banner-title">
              <span className="tm-yellow-text"  style={{    fontWeight: '900',}}>Fast & Reliable </span>
            </h1>

            <p className="tm-banner-subtitle"  style={{    fontSize: '56px',
    fontFamily: 'fangsong',
    marginBottom: '-14px',}}>
 Delivery
            </p>

            <Link to="/store" className="tm-banner-link" >
              Shop Now<i
            className="fa-solid fa-arrow-right-long ml-5"
         
          ></i>
            </Link>
          </div>

          <img src="/img/banner-12.jpg" alt="Banner 2"      style={{
         width: "100%",
    aspectRatio: "16 / 6",
    objectFit: "cover",
    display: "block"

    }}/>
        </div>

        {/* Slide 3 */}
        <div className="item">
          <div className="tm-banner-inner">
            <h1 className="tm-banner-title">
              <span className="tm-yellow-text"  style={{    fontWeight: '900',}}> Quality You Can </span> 
            </h1>

            <p className="tm-banner-subtitle"  style={{    fontSize: '56px',
    fontFamily: 'fangsong',
    marginBottom: '-14px',}}>
               Trust  
            </p>

            <Link to="/store" className="tm-banner-link" >
              Shop Now<i
            className="fa-solid fa-arrow-right-long ml-5"
         
          ></i>
            </Link>
          </div>

          <img src="/img/banner-4.jpg" alt="Banner 3"className="img-banner"  style={{
         width: "100%",
    aspectRatio: "16 / 6",
    objectFit: "cover",
    display: "block"

    }}/>
        </div>

      </OwlCarousel>

    </section>
  );
}

export default Banner;
