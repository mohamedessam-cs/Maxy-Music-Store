
import React, { useState } from "react";
import { useCart } from "react-use-cart";
import { Link, useNavigate } from "react-router";
import NavBar from "../NavBar/NavBar";


function Checkout() {

  const {
    items,
    totalItems,
    totalUniqueItems,
    cartTotal,
    emptyCart,
    isEmpty
  } = useCart();

  const navigate = useNavigate();


  // Customer Information
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");


  // Shipping Information
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");


  // If cart is empty
  if (isEmpty) {
    return (
      <>
        <NavBar />

        <div className="checkout-empty">

          <h1>Your Cart is Empty</h1>

          <p>
            You need to add some products before checking out.
          </p>

          <Link
            to="/store"
            className="checkout-back-store"
          >
            Go to Store
          </Link>

        </div>
      </>
    );
  }


  // Place Order
  const handlePlaceOrder = () => {

    // Generate Order Number
    const orderNumber =
      "MX-" + Math.floor(10000 + Math.random() * 90000);


    // Save Order Data
    const orderData = {

      orderNumber: orderNumber,

      firstName: firstName,
      lastName: lastName,

      email: email,
      phone: phone,

      address: address,
      city: city,
      country: country,

      totalItems: totalItems,
      totalUniqueItems: totalUniqueItems,

      totalPrice: Math.ceil(cartTotal).toLocaleString("en-US"),

      items: items

    };


    // Send data to PlaceOrder page
    navigate("/placeorder", {
      state: orderData
    });


    // Empty cart after saving the order data
    emptyCart();
  };


  return (
    <div className="checkout-page">

      <NavBar />


      {/* Header */}

      <div className="checkout-header">

        <div className="checkout-heading">

          <h1>Checkout</h1>

          <div className="checkout-title-line"></div>

          <p>
            Complete your order
          </p>

        </div>

      </div>


      <div className="container">

        <div className="checkout-layout">


          {/* =========================
              LEFT SIDE
          ========================== */}

          <div className="checkout-main">

            <h2>Order Information</h2>


            {/* Customer Information */}

            <div className="checkout-section">

              <h3>Customer Information</h3>


              <div className="checkout-form-row">

                <div className="checkout-input-group">

                  <label>First Name</label>

                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) =>
                      setFirstName(e.target.value)
                    }
                    placeholder="Enter your first name"
                  />

                </div>


                <div className="checkout-input-group">

                  <label>Last Name</label>

                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) =>
                      setLastName(e.target.value)
                    }
                    placeholder="Enter your last name"
                  />

                </div>

              </div>


              <div className="checkout-input-group">

                <label>Email Address</label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  placeholder="Enter your email"
                />

              </div>


              <div className="checkout-input-group">

                <label>Phone Number</label>

                <input
                  type="text"
                  value={phone}
                  onChange={(e) =>
                    setPhone(e.target.value)
                  }
                  placeholder="Enter your phone number"
                />

              </div>

            </div>


            {/* Shipping Address */}

            <div className="checkout-section">

              <h3>Shipping Address</h3>


              <div className="checkout-input-group">

                <label>Address</label>

                <input
                  type="text"
                  value={address}
                  onChange={(e) =>
                    setAddress(e.target.value)
                  }
                  placeholder="Enter your address"
                />

              </div>


              <div className="checkout-form-row">

                <div className="checkout-input-group">

                  <label>City</label>

                  <input
                    type="text"
                    value={city}
                    onChange={(e) =>
                      setCity(e.target.value)
                    }
                    placeholder="City"
                  />

                </div>


                <div className="checkout-input-group">

                  <label>Country</label>

                  <input
                    type="text"
                    value={country}
                    onChange={(e) =>
                      setCountry(e.target.value)
                    }
                    placeholder="Country"
                  />

                </div>

              </div>

            </div>


            {/* Payment */}

            <div className="checkout-section">

              <h3>Payment Method</h3>

              <label className="payment-option">

                <input
                  type="radio"
                  name="payment"
                  defaultChecked
                />

                <span>
                  Cash on Delivery
                </span>

              </label>

            </div>

          </div>


          {/* =========================
              RIGHT SIDE
          ========================== */}

          <div className="checkout-order">

            <h2>Order Summary</h2>


            {/* Products */}

            <div className="checkout-products">

              {items.map((item) => (

                <div
                  className="checkout-product"
                  key={item.id}
                >

                  <img
                    src={item.images[0]}
                    alt={item.title}
                  />


                  <div className="checkout-product-info">

                    <h4>
                      {item.title}
                    </h4>

                    <p>
                      Quantity: {item.quantity}
                    </p>

                  </div>


                  <strong>
                    {Math.ceil(
                      item.price * item.quantity
                    ).toLocaleString("en-US")}$
                  </strong>

                </div>

              ))}

            </div>


            {/* Summary */}

            <div className="checkout-summary">

              <div className="checkout-summary-line">

                <span>Products</span>

                <span>
                  {totalUniqueItems}
                </span>

              </div>


              <div className="checkout-summary-line">

                <span>Total Items</span>

                <span>
                  {totalItems}
                </span>

              </div>


              <div className="checkout-summary-line">

                <span>Subtotal</span>

                <span>
                  {Math.ceil(cartTotal).toLocaleString("en-US")} EGP
                </span>

              </div>


              <div className="checkout-summary-line">

                <span>Shipping</span>

                <span className="checkout-free">
                  FREE
                </span>

              </div>


              <div className="checkout-divider"></div>


              <div className="checkout-total">

                <span>
                  Total
                </span>

                <strong>
                  {Math.ceil(cartTotal).toLocaleString("en-US")} EGP
                </strong>

              </div>

            </div>


            {/* Place Order */}

            <button
              type="button"
              onClick={handlePlaceOrder}
              className="place-order-btn"
            >
              Place Order
            </button>


            <Link
              to="/cart"
              className="checkout-return"
            >
              ← Back to Cart
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Checkout;

