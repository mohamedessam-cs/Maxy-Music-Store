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

  const text = Data.find((item) => item.id === Number(id));

  useEffect(() => {}, [id]);
window.scrollTo({
  top: 0,
  behavior: "smooth"
});
  return (
    <div>
      <br />
      <br />
      <br />

      <div className="container"></div>

      <div className="row">

        {/* Image */}
        <div className="col-md-6 text-center">
          <img
            src={text.images}
            className="api-img2"
            alt={text.title}
          />
        </div>

        {/* Product Details */}
        <div className="col-md-6 text-center proudct-border product-details">

          {/* Brand */}
          <h4 className="mt-4 brand product-brand">
            {text.brand}
          </h4>

          {/* Title */}
          <h4 className="title">
            {text.title}
          </h4>

          {/* Stars and Rating */}
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

          {/* Line */}
          <span className="product-line"></span>

          {/* Price Before Discount */}
          <h6 className="mt-4 price-bef-dis product-old-price">
            EGP {text.price0.toLocaleString("en-US")}
          </h6>

          {/* Price After Discount */}
          <h6 className="price-af-dis product-new-price">
            EGP {text.price.toLocaleString("en-US")}
          </h6>

          {/* Description */}
          <h1 className="desc">
            {text.description}
          </h1>

          {/* Product Information */}
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

          {/* Product Actions */}
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