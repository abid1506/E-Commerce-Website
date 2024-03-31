import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";


const RenderProducts = ({
  noResults,
  searchResults,
  applyFiltersAndSort,
  products,
  displayedProducts,
}) => {
  const productsToRender = noResults
    ? []
    : searchResults.length > 0
    ? applyFiltersAndSort(searchResults)
    : applyFiltersAndSort(products);

  return (
    <div className="row">
      {productsToRender.slice(0, displayedProducts).map((item) => {
        // Calculate discounted price for each item
        const discountedPrice =
          item.price * 80 - (item.price * 80 * item.discountPercentage) / 100;

        return (
          <section
            className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-6 product-section mb-3"
            key={item.id}
          >
            <div className="product_list product-cart mt-3">
              <Link
                to={`/shop/${item.id}/${item.title
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`}
              >
                <div className="imgholder text-center">
                  <img
                    className="img-fluid"
                    src={item.images[0]}
                    alt={item.title}
                  />
                </div>
              </Link>
              <span>{item.category}</span>
              <div className="title mt-2">
                {" "}
                <Link
                  to={`/shop/${item.id}/${item.title
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                >
                  {item.title}
                </Link>{" "}
              </div>

              <div className="stars d-flex align-items-center">
                {item.rating.toFixed(1)}
                <AiFillStar />
              </div>
              
              <div className="d-flex justify-content-between">
                <div>
                  <span className="discounted-price">
                    ₹{discountedPrice.toFixed(0)}
                  </span>
                  <span className="price">₹{item.price * 80}</span>
                  
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <span className="discount">
                    {" "}
                    ({item.discountPercentage}% OFF)
                  </span>
                </div>
                
              </div>

            </div>

          </section>
        );
      })}
    </div>
  );
};

export default RenderProducts;
