import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import { AiFillStar } from "react-icons/ai";

export default function SearchResults() {

//reciveing param via routing
const { searchValue } = useParams();

//binding/mapping API data
const [products, setProducts] = useState([]);

  useEffect(() => {       
       
    // Fetch data using Promise with the Fetch API
       const serchedProducts  = () => {    
        fetch(`https://dummyjson.com/products/search?q=${searchValue}`)
        .then(res => res.json())  
        .then((data) => {
          setProducts(data.products);
    
          //console.log(data.products)      
        })  
        
        .catch((err) => console.log(err));    
    }

    serchedProducts()

  }, [searchValue]); //using depenedency if search value gets change component will re-render.

  return (

    <>

      <div className="row key={item.id}">
        {products.map((item) => (

          <section className="col-xl-3 col-lg-4 col-md-4 col-sm-6 product-section mb-3" key={item.id} >

            <div className="product_list product-cart mt-3">

            <Link to={`/shop/${item.id}/${item.title.replace(/\s+/g, "-").toLowerCase()}`} >
                  
            <div className="imgholder text-center">
                <img  className="img-fluid"  src={item.images[0]} alt={item.title} />
              </div>

                </Link>{" "}
              

              <span>{item.category}</span>

              <div className="title mt-2">
                {" "}
                <Link to={`/shop/${item.id}/${item.title.replace(/\s+/g, "-").toLowerCase()}`} >
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
                      ₹
                      {(
                        item.price * 80 -
                        (item.price * 80 * item.discountPercentage) / 100
                      ).toFixed(0)}
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

      </div>

    </>

  )
}