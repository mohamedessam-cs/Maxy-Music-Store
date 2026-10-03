import { useContext, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import { useParams, Link, useNavigate } from "react-router";
import { apiValue } from "../AllData/AllData";
import { useCart } from "react-use-cart";

function Cartt() {

  const { addItem } = useCart();

  const { id } = useParams();

  const navigate = useNavigate();

  const Data = useContext(apiValue);

  const text = Data?.find(
    (item) => Number(item.id) === Number(id)
  );

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);

  // API is still loading
  if (Data.length === 0) {
    return (
      <>
        <NavBar />

        <div className="container text-center mt-5">
          <h2>Loading...</h2>
        </div>
      </>
    );
  }

  // Product doesn't exist
  if (!text) {
    return (
      <>
        <NavBar />

        <div className="container text-center mt-5">

          <h2>Product Not Found</h2>

          <Link
            to="/store"
            className="btn btn-warning mt-3"
          >
            Back To Store
          </Link>

        </div>
      </>
    );
  }

  return (
    <div>

      <br />
      <br />
      <br />

      <div className="row">

        {/* Product Image */}

        <div className="col-md-6 text-center">

          <img
            src={
              Array.isArray(text.images)
                ? text.images[0]
                : text.images
            }
            className="api-img2"
            alt={text.title}
          />

        </div>

        {/* Product Details */}

        <div className="col-md-6 text-center proudct-border product-details">

          <h4 className="mt-4 brand product-brand">
            {text.brand}
          </h4>

          <h4 className="title">
            {text.title}
          </h4>

          <div className="Stars product-stars">

            <h5 className="product-rating">
              ({text.rating}) 149 review
            </h5>

            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star-half-stroke"></i>

            <br />

          </div>

          <span className="product-line"></span>

          <h6 className="mt-4 price-bef-dis product-old-price">
            EGP {Number(text.price0).toLocaleString("en-US")}
          </h6>

          <h6 className="price-af-dis product-new-price">
            EGP {Number(text.price).toLocaleString("en-US")}
          </h6>

          <h1 className="desc">
            {text.description}
          </h1>

          <div className="product-info">

            <h4 className="mt-4">
              <i className="fa-solid fa-cube"></i>
              Brand: {text.brand}
            </h4>

            <h4 className="mt-4">
              <i className="fa-solid fa-crop-simple"></i>
              Category: {text.category}
            </h4>

            <h4 className="mt-4">
              <i className="fa-solid fa-box"></i>
              Stock: {text.stock}
            </h4>

            <h4 className="mt-4">
              <i className="fa-solid fa-tag"></i>
              Discount: {text.discountPercentage}%
            </h4>

            <h4 className="mt-4">
              <i className="fa-solid fa-star"></i>
              Rating: {text.rating}
            </h4>

            <h4>
              <i className="fa-brands fa-orcid"></i>
              ID: {text.id}
            </h4>

          </div>

          <div className="product-actions">

            <button
              type="button"
              className="product-action-button add-to-cart"
              onClick={() => {
                addItem(text);
                navigate("/cart");
              }}
            >
              Add to cart
            </button>

            <Link
              to="/store"
              className="product-action-button product-back"
            >
              <i className="fa-solid fa-arrow-left"></i>
              Back
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

function AllSingleProduct() {
  return (
    <div>
      <NavBar />
      <Cartt />
    </div>
  );
}

export default AllSingleProduct;