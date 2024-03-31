import "../App.css";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";


function App() {
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState(8);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  const skincareProducts = products.filter(
    (item) => item.category.toLowerCase() === "skincare"
  );

  const showMoreProducts = () => {
    setDisplayedProducts((prev) => prev + 8);
  };

  return (
    <>
      <div className="container">
        
         
            <div className="row">
              {skincareProducts.slice(0, displayedProducts).map((item) => (
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
                       ₹{(item.price * 80 - (item.price * 80 * item.discountPercentage)/ 100).toFixed(0) }
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
              ))}
            
            {displayedProducts < skincareProducts.length && (
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
