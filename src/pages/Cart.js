import Total from "../components/Total";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";

import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Cart() {
  //
  const [isEmpty, setIsEmpty] = useState([]);

  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    //if cart is empty show/hide div.
    if (cart <= 0) {
      //alert ("empty")
      setIsEmpty(false);
    } else {
      //alert ("carry on")
      setIsEmpty(true);
    }
  }, [cart]);

  return (
    <>
      <div className="midWrap">
        <div className="ecart">

          <div className="container">
            {isEmpty ? (

              <div className="row">

                <div className="col-lg-8">
                  {cart?.map((item) => (
                    <CartItem key={item.id} id={item.id} thumbnail={item.thumbnail} title={item.title} price={item.price}
                    quantity={item.quantity}/> 
                  ))}
                </div>

                <div className="col-lg-4 order-lg-1 mt-5">
                  <Total />
                </div>

              </div>

            ) : (
              
              <div className="row">
                <div className="col-lg-8 col-12">
                  <h3>Your Cart is empty.</h3>

                  <p>
                    Your Shopping Cart lives to serve. Give it purpose — fill it
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
  );
}

export default Cart;
