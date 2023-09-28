import React from "react";
import CartItem from "../../components/CartItem/CartItem";

const Cart = () => {
  return (
    <section>
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <p>
        <strong>Total Price: </strong>$99.99
      </p>
      <button>Place Order</button>
    </section>
  );
};

export default Cart;
