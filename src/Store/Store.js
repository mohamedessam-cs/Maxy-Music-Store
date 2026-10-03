import react, { useContext, useEffect, useState } from "react";
import Banner from "../Home/Banner";
import NavBar from "../NavBar/NavBar";
import Footer from "../Home/Footer";
import axios from "axios";
import { Link } from "react-router-dom";
import { apiValue } from "../AllData/AllData";
import { CartProvider, useCart } from "react-use-cart";

function Page() {
  const { addItem } = useCart();

  const Data = useContext(apiValue);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(11);
  const [addedId, setAddedId] = useState(null);
  const getValue = (event) => {
    setSearch(event.target.value);
  };

  const filteredProducts = Data.filter((item) => {
    return category === "All" || item.category === category;
  });
  const searchedProducts = filteredProducts.filter((item) => {
    return (
      search === "" ||
      String(item.id) === search ||
      item.title.toUpperCase().includes(search.toUpperCase())
    );
  });
  return (
    <div>
      <div className="store-title">
        <span></span>
        <h2>OUR STORE</h2>
        <span></span>
      </div>
      <h2 className="store-p">
        PREMIUM<span> MUSICAL </span>INSTRUMENTS
      </h2>
      <p></p>

      <div className="container ">
        <div className="row ">
          <div className="col-md-10 m-auto">
            {/* search */}
            <input
              onChange={getValue}
              className="form-control1 mb-5 "
              placeholder="Search For Products..."
            ></input>
            <div className="categories">
              <button onClick={() => setCategory("All")}>All</button>
              <button onClick={() => setCategory("Guitars")}>Guitars</button>
              <button onClick={() => setCategory("Keyboards")}>
                Keyboards
              </button>
              <button onClick={() => setCategory("Drums")}>Drums</button>
              <button onClick={() => setCategory("Speakers")}>Speakers</button>
              <button onClick={() => setCategory("Microphones")}>
                Microphones
              </button>
              <button
                className="studio-button"
                onClick={() => setCategory("Studio Equipment")}
              >
                Studio Equipment
              </button>
              <button onClick={() => setCategory("Accessories")}>
                Accessories
              </button>
            </div>
          </div>

          {filteredProducts
            .filter((items) => {
              return (
                search == "" ||
                items.id == search ||
                items.title.toUpperCase().includes(search.toUpperCase())
              );
            })
            .slice(0, visibleCount)
            .map((items) => {
              return (
                <div
                  className="col-md-3 text-center mb-5 product-card"
                  key={items.id}
                >
                  <img
                    src={items.images[0]}
                    className="w-100 api-img"
                    alt={items.title}
                  />

                  <h5>{items.title}</h5>

                  <h5>{items.category}</h5>

                  <Link
                    to={`/allsingleproduct/${items.id}`}
                    className=" wd-action-text"
                    data-price={`EGP ${items.price.toLocaleString("en-US")}`}
                  ></Link>
                  <br/>
                  <button
  onClick={() => {
    addItem(items);
    setAddedId(items.id);

    setTimeout(() => {
      setAddedId(null);
    }, 1500);
  }}
  className={`add-cart-0 ${
    addedId === items.id ? "cart-added" : ""
  }`}
>
  {addedId === items.id ? (
    <>
      Added <i className="fa-solid fa-check"></i>
    </>
  ) : (
    <>
      Add to cart <i className="fa-solid fa-cart-shopping"></i>
    </>
  )}
</button>
                </div>
              );
            })}
        </div>
        {visibleCount < searchedProducts.length && (
          <button
            className=" product-button"
            onClick={() => setVisibleCount((count) => count + 11)}
          >
            More
          </button>
        )}
      </div>
      <Footer />
    </div>
  );
}
function Store() {
  return (
    <div>
      <NavBar />
      <Page />
    </div>
  );
}
export default Store;
