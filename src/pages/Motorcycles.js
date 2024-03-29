import "../App.css";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState(8);

  useEffect(() => {
    // Fetch products data from an API endpoint
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  const motorcycleProducts = products.filter(
    (item) => item.category.toLowerCase() === "motorcycle"
  );

  const showMoreProducts = () => {
    setDisplayedProducts((prev) => prev + 8);
  };

  return (
    <>
      <div className="container">
        
         
            <div className="row">
              {motorcycleProducts.slice(0, displayedProducts).map((item) => (
                <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 product-section mb-3" key={item.id}>
                  <div className="product_list">
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
                    ${item.price}
                    
                  </div>
                </div>
              ))}
            
            {displayedProducts < motorcycleProducts.length && (
              <div className="text-center">
                <button
                  className="btn btn-secondary"
                  onClick={showMoreProducts}
                >
                  Show More
                </button>
              </div>
            )}
          </div>
          
      </div>
    </>
  );
}

export default App;
