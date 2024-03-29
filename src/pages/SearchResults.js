import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import { RiStarSLine } from "react-icons/ri";

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
              <div className="imgholder text-center">
                <img  className="img-fluid"  src={item.images[0]} alt={item.title} />
              </div>

              <span>{item.category}</span>

              <div className="title mt-2">
                {" "}
                <Link to={`/shop/${item.id}/${item.title.replace(/\s+/g, "-").toLowerCase()}`} >
                  {item.title}
                </Link>{" "}
              </div>

              <div className="stars">
                {item.rating}
                <RiStarSLine />
              </div>

              <h4 className="price">${item.price}</h4>
            </div>

          </section>

        ))}

      </div>

    </>

  )
}