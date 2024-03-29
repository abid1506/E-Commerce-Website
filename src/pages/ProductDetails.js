import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { RiStarSLine } from "react-icons/ri";

import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { addToWishlist } from "../redux/cartSlice";

export default function ProductDetails() {
  const { id } = useParams();


  const dispatch = useDispatch();

  //setting values to show
  const [values, setValues] = useState({ title: "", description: "",price: "",discountPercentage: "",rating: "",
    stock: "", category: "", thumbnail: "", images: "[0]",});

  const fetchProductDetail = () => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())

      .then((data) => {
        setValues(data);

        //console.log(data)
      })

      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProductDetail();
    // eslint-disable-next-line
  }, []);

  return (
    <>

      <div className="row d-flex justify-content-center key={item.id}">
       
          <section className="col-xl-3 col-lg-4 col-md-6 col-sm-8 product-section mt-3 d-flex align-items-center justify-content-center ">

            <div className="product_list product-cart mt-3 ">
              

              
              <div className="imgholder text-center">
                <img className="img-fluid " src={values.images[0]} alt={values.title}/>
              </div>

              <span>{values.category}</span>

              <div className="title mt-2">
                {" "}
                <h4>{values.title}</h4>
              </div>              

              <div className="stars">
                {values.rating}
                <RiStarSLine />
              </div>

              <div className="price">
                <span className="sale">${values.price}</span>
                <span className="discount"> ({values.discountPercentage}% OFF) </span>
              </div>

              <div className="mt-3">
                {" "}
                <p>{values.description}</p>{" "}
              </div>

              <div className="d-flex justify-content-between">
              <div className="mt-4">
                <button className="btn btn-primary me-3"
                  onClick={() => dispatch(  addToCart({id,title: values.title, thumbnail: values.thumbnail, price: values.price,})) }>
                  Add to Bag
                </button>
              </div>

              <div className="mt-4">
                <button className="btn btn-primary me-3"
                  onClick={() => dispatch(  addToWishlist({id,title: values.title, thumbnail: values.thumbnail, price: values.price,})) }>
                  Add to Wish
                </button>
              </div>
              </div>

            </div>

          </section>

      </div>

    </>
  );
}
