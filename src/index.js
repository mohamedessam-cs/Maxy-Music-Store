
import "./jquery-global";
import React from "react";
import Checkout from "./Checkout/Checkout";
import PlaceOrder from "./PlaceOrder/PlaceOrder";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ReactDOM from "react-dom/client";
import App from "./App";

import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import About from "./About/About";
import Store from "./Store/Store";
import AllCart from "./Cart/AllCart";
import { AllData } from "./AllData/AllData";
import AllSingleProduct from "./AllSingleProduct/AllSingleProduct";
import { CartProvider } from "react-use-cart";
import ScrollToTop from "react-scroll-to-top";


const ahmed = createHashRouter([
  { path: "/", element: <App /> },
  { path: "/about", element: <About /> },
  { path: "/store", element: <Store /> },
  { path: "/cart", element: <AllCart /> },
  { path: "/allsingleproduct/:id", element: <AllSingleProduct /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "/placeorder", element: <PlaceOrder /> },
]);


const root = ReactDOM.createRoot(
  document.getElementById("root")
);


root.render(
  <CartProvider>

    <AllData>

      <ScrollToTop
        smooth
        viewBox="0 0 640 640"
        svgPath="M342.6 105.4C330.1 92.9 309.8 92.9 297.3 105.4L137.3 265.4C124.8 277.9 124.8 298.2 137.3 310.7C149.8 323.2 170.1 323.2 182.6 310.7L320 173.3L457.4 310.6C469.9 323.1 490.2 323.1 502.7 310.6C515.2 298.1 515.2 277.8 502.7 265.3L342.7 105.3zM502.6 457.4L342.6 297.4C330.1 284.9 309.8 284.9 297.3 297.4L137.3 457.4C124.8 469.9 124.8 490.2 137.3 502.7C149.8 515.2 170.1 515.2 182.6 502.7L320 365.3L457.4 502.6C469.9 515.1 490.2 515.1 502.7 502.6C515.2 490.1 515.2 469.8 502.7 457.3z"
        color="gray"
        style={{
          backgroundColor: "",
        }}
      />

      <RouterProvider router={ahmed} />

    </AllData>

  </CartProvider>
);

