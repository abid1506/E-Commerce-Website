import WishlistItem from "../components/WishlistItem";
import { useSelector } from "react-redux";

import { useState,  useEffect } from "react";
import { Link } from "react-router-dom";

export default function Wishlist() {

  const [isEmpty, setIsEmpty] = useState([]);

  const wishlist = useSelector((state) => state.wishlist);

  useEffect(() => {
    
    if (wishlist <= 0) {
      
      setIsEmpty(false);
    } else {
      
      setIsEmpty(true);
    }
  }, [wishlist]);

  return (
    <>

<div className="midWrap">
        <div className="ecart">

          <div className="container">
            {isEmpty ? (

              <div className="row">

                <div className="col-lg-8">
                  {wishlist?.map((item) => (
                    <WishlistItem key={item.id} id={item.id} thumbnail={item.thumbnail} title={item.title} price={item.price}/> 
                  ))}
                </div>

              </div>

            ) : (
              
              <div className="row">
                <div className="col-lg-8 col-12">
                  <h3>Your Wishlist is empty.</h3>

                  <p>
                    Your Wishlist lives to serve. Give it purpose — fill it
                    with groceries, clothing, household supplies, electronics,
                    and more. Continue shopping on the{" "}
                    <Link to="/">homepage</Link>.
                  </p>

                </div>
              </div>

            )}
          </div>

        </div>
      </div>
    </>
  )
}
