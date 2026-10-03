
import React from "react";
import { Link, useLocation } from "react-router";
import NavBar from "../NavBar/NavBar";

function PlaceOrder() {

  const location = useLocation();

  const order = location.state;


  // If there is no order data
  if (!order) {
    return (
      <>
        <NavBar />

        <div className="checkout-empty">

          <h1>No Order Found</h1>

          <p>
            There is no order information available.
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


  return (
    <>
      <NavBar />

      <div className="checkout-success-page">

        <div className="checkout-success-card">


          {/* Success Icon */}

          <div className="success-icon">
            <span>✓</span>
          </div>


          {/* Title */}

          <h1>
            Order Placed Successfully!
          </h1>


          <p className="success-message">
            Thank you for your purchase. Your order has been
            successfully placed and is being processed.
          </p>


          {/* Order Number */}

          <div className="order-number">

            <span>
              Order Number
            </span>

            <strong>
              #{order.orderNumber}
            </strong>

          </div>


          {/* Customer Information */}

          <div className="checkout-customer-info">

            <div className="customer-row">

              <span>
                Name
              </span>

              <strong>
                {order.firstName} {order.lastName}
              </strong>

            </div>


            <div className="customer-row">

              <span>
                Address
              </span>

              <strong>
                {order.address}
              </strong>

            </div>


            <div className="customer-row">

              <span>
                City
              </span>

              <strong>
                {order.city}
              </strong>

            </div>


            <div className="customer-row">

              <span>
                Country
              </span>

              <strong>
                {order.country}
              </strong>

            </div>

          </div>


          {/* Order Summary */}

          <div className="checkout-summary">

            <div className="summary-row">

              <span>
                Items
              </span>

              <strong>
                {order.totalItems}
              </strong>

            </div>


            <div className="summary-row">

              <span>
                Subtotal
              </span>

              <strong>
                {order.totalPrice} EGP
              </strong>

            </div>


            <div className="summary-row">

              <span>
                Shipping
              </span>

              <strong>
                Free
              </strong>

            </div>


            <div className="summary-divider"></div>


            <div className="summary-row total-row">

              <span>
                Total
              </span>

              <strong>
                {order.totalPrice} EGP
              </strong>

            </div>

          </div>


          {/* Buttons */}

          <div className="checkout-buttons">

            <Link
              to="/store"
              className="continue-shopping"
            >
              Continue Shopping
            </Link>

          </div>


          <p className="bottom-message">
            Thank you for shopping with us ❤️
          </p>


        </div>

      </div>
    </>
  );
}

export default PlaceOrder;
