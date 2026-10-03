
import React from "react";
import { Link } from "react-router";

function Gray() {
  return (
    <section className="container tm-home-section-1" id="more">

      {/* Sale Image */}
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="sale-image">
            <img
              className="big-sale-image"
              src={process.env.PUBLIC_URL + "/images/graytop.png"}
              alt="Sale"
            />

            <Link to="/store" className="link">
              SHOP NOW
              <i
                className="fa-solid fa-arrow-right-long ml-5"
              ></i>
            </Link>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="section-margin-top">
        <div className="row">
          <div className="tm-section-header">

            <div className="col-lg-3 col-md-3 col-sm-3">
              <hr className="hr-gray" />
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6">
              <h2 className="tm-section-title">
                Maxy For You
              </h2>

              <h3
                className="par"
                style={{
                  marginTop: "3px",
                  fontWeight: "400",
                  fontSize: "12px",
                  color: "#999",
                  lineHeight: "1.7",
                }}
              >
                Discover our best sellers and find what fits your style
              </h3>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-3">
              <hr className="hr-gray" />
            </div>

          </div>
        </div>

        {/* Images */}
        <div className="row">

          {/* Card 1: Special Offers */}
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 col-xxs-12">
            <div className="tm-home-box-2 bg-white text-start p-0 rounded shadow-sm overflow-hidden">

              <img
                src={process.env.PUBLIC_URL + "/img/Shop.6.jpg"}
                alt="Special Offers"
                className="img-responsive w-100"
              />

              <div className="p-3">

                <h4
                  className="fw-bold text-uppercase mb-2"
                  style={{
                    fontSize: "14px",
                    letterSpacing: "1px",
                  }}
                >
                  SPECIAL OFFERS
                </h4>

                <p
                  className="text-muted small mb-3"
                  style={{
                    fontWeight: "400",
                    fontSize: "12px",
                    color: "#999",
                    lineHeight: "1.7",
                  }}
                >
                  Take advantage of the best deals on your favorite items.
                </p>

                <Link to="/store" className="Text">
                  SHOP NOW
                  <i
                    className="fa-solid fa-arrow-right-long ml-5"
                  ></i>
                </Link>

              </div>
            </div>
          </div>


          {/* Card 2: Trending Now */}
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 col-xxs-12">
            <div className="tm-home-box-2 bg-white text-start p-0 rounded shadow-sm overflow-hidden">

              <img
                src={process.env.PUBLIC_URL + "/img/Shop.1.jpg"}
                alt="Trending Now"
                className="img-responsive w-100"
              />

              <div className="p-3">

                <h4
                  className="fw-bold text-uppercase mb-2"
                  style={{
                    fontSize: "14px",
                    letterSpacing: "1px",
                  }}
                >
                  TRENDING NOW
                </h4>

                <p
                  className="text-muted small mb-3"
                  style={{
                    fontWeight: "400",
                    fontSize: "12px",
                    color: "#999",
                    lineHeight: "1.7",
                  }}
                >
                  Discover what's hot right now and don't miss out.
                </p>

                <Link to="/store" className="Text">
                  SHOP NOW
                  <i
                    className="fa-solid fa-arrow-right-long ml-5"
                  ></i>
                </Link>

              </div>
            </div>
          </div>


          {/* Card 3: Top Brands */}
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 col-xxs-12">
            <div className="tm-home-box-2 bg-white text-start p-0 rounded shadow-sm overflow-hidden">

              <img
                src={process.env.PUBLIC_URL + "/img/Shop.3.jpg"}
                alt="Top Brands"
                className="img-responsive w-100"
              />

              <div className="p-3">

                <h4
                  className="fw-bold text-uppercase mb-2"
                  style={{
                    fontSize: "14px",
                    letterSpacing: "1px",
                  }}
                >
                  TOP BRANDS
                </h4>

                <p
                  className="text-muted small mb-3"
                  style={{
                    fontWeight: "400",
                    fontSize: "12px",
                    color: "#999",
                    lineHeight: "1.7",
                  }}
                >
                  Shop from the most trusted brands in the market.
                </p>

                <Link to="/store" className="Text">
                  SHOP NOW
                  <i
                    className="fa-solid fa-arrow-right-long ml-5"
                  ></i>
                </Link>

              </div>
            </div>
          </div>


          {/* Card 4: Easy Shopping */}
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 col-xxs-12">
            <div className="tm-home-box-2 bg-white text-start p-0 rounded shadow-sm overflow-hidden">

              <img
                src={process.env.PUBLIC_URL + "/img/Shop.8.jpg"}
                alt="Easy Shopping"
                className="img-responsive w-100"
              />

              <div className="p-3">

                <h4
                  className="fw-bold text-uppercase mb-2"
                  style={{
                    fontSize: "14px",
                    letterSpacing: "1px",
                  }}
                >
                  EASY SHOPPING
                </h4>

                <p
                  className="text-muted small mb-3"
                  style={{
                    marginBottom: "3px",
                    fontWeight: "400",
                    fontSize: "12px",
                    color: "#999",
                    lineHeight: "1.7",
                  }}
                >
                  Simple, fast and secure checkout process.
                  <br />
                  <br />
                </p>

                <Link to="/store" className="Text">
                  SHOP NOW
                  <i
                    className="fa-solid fa-arrow-right-long ml-5"
                  ></i>
                </Link>

              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}

export default Gray;
