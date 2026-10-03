
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: process.env.PUBLIC_URL + "/img/banner-1.png",
      title: (
        <>
          Find{" "}
          <span className="tm-yellow-text">The Best</span> Place
        </>
      ),
      subtitle: "For Your needs",
    },
    {
      image: process.env.PUBLIC_URL + "/img/banner-12.jpg",
      title: (
        <span className="tm-yellow-text">
          Fast & Reliable
        </span>
      ),
      subtitle: "Delivery",
    },
    {
      image: process.env.PUBLIC_URL + "/img/banner-4.jpg",
      title: (
        <span className="tm-yellow-text">
          Quality You Can
        </span>
      ),
      subtitle: "Trust",
    },
  ];

  // Autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  return (
    <section className="tm-banner">

      <div className="banner-slider">

        {slides.map((slide, index) => (

          <div
            key={index}
            className={`banner-slide ${
              index === currentSlide ? "active" : ""
            }`}
          >

            {/* الصورة */}
            <img
              src={slide.image}
              alt={`Banner ${index + 1}`}
              className="img-banner"
            />

            {/* الكلام فوق الصورة */}
            <div className="tm-banner-inner">

              <h1
                className="tm-banner-title"
                style={{ fontWeight: "900" }}
              >
                {slide.title}
              </h1>

              <p
                className="tm-banner-subtitle"
                style={{
                  fontSize: "56px",
                  fontFamily: "fangsong",
                  marginBottom: "-14px",
                }}
              >
                {slide.subtitle}
              </p>

              <Link
                to="/store"
                className="tm-banner-link"
              >
                Shop Now
                <i className="fa-solid fa-arrow-right-long ml-5"></i>
              </Link>

            </div>

          </div>

        ))}

        {/* Previous */}
        <button
          className="banner-prev"
          onClick={prevSlide}
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>

        {/* Next */}
        <button
          className="banner-next"
          onClick={nextSlide}
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>

        {/* Dots */}
        <div className="banner-dots">

          {slides.map((_, index) => (

            <button
              key={index}
              className={index === currentSlide ? "active" : ""}
              onClick={() => setCurrentSlide(index)}
            ></button>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Banner;
