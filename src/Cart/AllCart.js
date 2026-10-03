import React from "react"; 
import { CartProvider, useCart } from "react-use-cart"; 
import NavBar from "../NavBar/NavBar"; 
import { Link } from "react-router"; 
 
function Cart() {
  const {
    items,
    updateItemQuantity,
    removeItem,
    totalItems,
    totalUniqueItems,
    cartTotal,
    emptyCart,
    isEmpty,
  } = useCart();

  if (isEmpty) {
    return (
      <div className="empty-cart">
        <img src="/images/cart.jpg" style={{ width: "400px" }}></img>

        <h1 style={{ fontWeight: "600" }}>Your Cart is Empty</h1>

        <br />

        <h5 style={{ color: "#777", marginBottom: "16px" }}>
          Looks like you haven't added anything to your cart yet.
          <br />
          Explore our store and find something you'll love!
        </h5>

        <Link
          to="/store"
          className="go-to-store"
          style={{
            color: "#000",
            textDecoration: "none",
            backgroundColor: "rgb(255 203 10)",
            padding: "6px 27px 9px 34px",
            borderRadius: "5px",
          fontWeight:' 700',
    fontSize: '16px',
          }}
        >
          Go to Store
          <i
            className="fa-solid fa-arrow-right-long ml-5"
            style={{ marginLeft: "5px", transform: "translateY(1.5px)" }}
          ></i>
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">

      {/* Cart Header */}
  <div className="cart-header">
  <div className="cart-heading">
    <h1>Your Cart</h1>
    <div className="cart-title-line"></div>
    <p>{totalUniqueItems} items in your cart</p>
  </div>
</div>


      {/* Cart Content */}
      <div className="container">
        <div className="cart-layout">

          {/* Left Side */}
          <div className="cart-main">

            <div className="cart-top">
              <h2>Shopping Cart</h2>

              <button
                onClick={() => emptyCart()}
                className="empty-cart-btn"
              >
                Empty Cart
              </button>
            </div>


            <div className="cart-table">
              <table className="text-center">

                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Operation</th>
                  </tr>
                </thead>


                <tbody>
                  {items.map((element) => {
                    return (
                      <tr className="cart-row" key={element.id}>

                        <td>
                          <img
                            src={element.images[0]}
                            className="cart-product-img"
                          />
                        </td>


                        <td className="cart-product-info">

                          <h5 className="cart-product-name">
                            {element.title}
                          </h5>

                          <p className="cart-description">
                            {element.description}
                          </p>

                        </td>


                        <td>

                          <div className="cart-quantity">

                            <button
                              onClick={() =>
                                updateItemQuantity(
                                  element.id,
                                  element.quantity + 1
                                )
                              }
                              className="quantity-btn plus"
                            >
                              +
                            </button>

                            <span>{element.quantity}</span>

                            <button
                              onClick={() =>
                                updateItemQuantity(
                                  element.id,
                                  element.quantity - 1
                                )
                              }
                              className="quantity-btn minus"
                            >
                              -
                            </button>

                          </div>

                        </td>


                        <td className="cart-price">
                         {(element.price * element.quantity).toLocaleString("en-US")} EGP
                        </td>


                        <td className="cart-actions">

                          <button
                            onClick={() => removeItem(element.id)}
                            className="cart-delete"
                          >
                            &times;
                          </button>

                        </td>

                      </tr>
                    );
                  })}
                </tbody>

              </table>
            </div>

          </div>


          {/* Right Side - Order Summary */}
          <div className="order-summary">

            <h2>Order Summary</h2>

            <div className="summary-line">
              <span>Items</span>
              <span>{totalItems}</span>
            </div>

            <div className="summary-line">
              <span>Subtotal</span>
              <span>{Math.ceil(cartTotal).toLocaleString("en-US")} EGP</span>
            </div>

            <div className="summary-line">
              <span>Shipping</span>
              <span className="free">FREE</span>
            </div>


            <div className="summary-total">
              <span>Total</span>
              <strong>{Math.ceil(cartTotal).toLocaleString("en-US")} EGP</strong>
            </div>


            <Link
              to="/checkout"
              className="checkout-btn"
            >
              Proceed to Checkout
            </Link>


            <Link
              to="/store"
              className="back-store"
            >
              ← Continue Shopping
            </Link>

          </div>

        </div>
      </div>

    </div>
  );
}
 
function AllCart() { 
  return ( 
    <div className="all-cart">
      <NavBar />
      <Cart />
    </div>
  ); 
} 
 
export default AllCart;