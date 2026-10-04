
import React from "react";
import { Link } from "react-router-dom";

function Infor() {
  return (
    <div className="about-page">

      {/* =========================
          ABOUT INTRO
      ========================= */}

      <section className="about-intro">

        <div className="section-title">
          <span></span>
          <h2>ABOUT MAXY</h2>
          <span></span>
        </div>

        <h1>
          MUSIC <strong>BUILDS</strong> BETTER DAYS
        </h1>

        <p>
          MAXY is a modern music store created for people who love music
          and want quality instruments, professional equipment and great
          prices all in one place.
        </p>

      </section>


      {/* =========================
          ABOUT CONTENT
      ========================= */}

      <section className="about-content">

        <div className="about-image">

          <img
            src={process.env.PUBLIC_URL + "/img/About1.jpg"}
            alt="Music instruments"
          />

        </div>


        <div className="about-text">

          <span className="small-title">
            WHO WE ARE
          </span>

          <h2>
            Everything You Need
            <br />
            <strong>For Your Music</strong>
          </h2>

          <p>
            At MAXY, we believe that the right instrument can make a
            difference. That's why we provide a wide collection of
            musical instruments and professional equipment.
          </p>

          <p>
            From guitars and keyboards to drums, microphones,
            headphones and studio equipment, MAXY brings everything
            musicians need together in one place.
          </p>


          {/* FEATURES */}

          <div className="about-features">

            <div className="feature">

              <div className="feature-icon">
                ♪
              </div>

              <div>
                <h3>Quality Products</h3>

                <p>
                  Reliable products from trusted brands.
                </p>
              </div>

            </div>


            <div className="feature">

              <div className="feature-icon">
                ★
              </div>

              <div>
                <h3>Best Prices</h3>

                <p>
                  Great value for musicians and creators.
                </p>
              </div>

            </div>


            <div className="feature">

              <div className="feature-icon">
                ♫
              </div>

              <div>
                <h3>For Every Musician</h3>

                <p>
                  Everything from beginners to professionals.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          ABOUT BANNER
      ========================= */}

      <section className="about-banner">

        <div className="about-banner-content">

          <span>
            YOUR MUSIC. YOUR STYLE.
          </span>

          <h2>
            PLAY IT.
            <strong> FEEL IT.</strong>
          </h2>

          <p>
            Find the perfect instrument and start creating something
            amazing.
          </p>

          <Link
            to="/store"
            className="about-button"
          >
            EXPLORE STORE
          </Link>

        </div>

      </section>


      {/* =========================
          ABOUT VALUES
      ========================= */}

      <section className="about-values">

        <div className="value-card">

          <span>01</span>

          <h3>
            Quality
          </h3>

          <p>
            We focus on providing quality products for every musician.
          </p>

        </div>


        <div className="value-card active">

          <span>02</span>

          <h3>
            Passion
          </h3>

          <p>
            Music is more than a product. It's a passion and a lifestyle.
          </p>

        </div>


        <div className="value-card">

          <span>03</span>

          <h3>
            Choice
          </h3>

          <p>
            A wide selection of instruments and equipment in one place.
          </p>

        </div>

      </section>

    </div>
  );
}

export default Infor;