import React from "react";
import CartItem from "../../components/CartItem/CartItem";
import styles from "./Cart.module.scss";

const Cart = ({ cartItems }) => {
  return (
    <section className={styles.cart}>
      {cartItems.map((cartItem) => (
        <CartItem
          key={cartItem.id}
          id={cartItem.id}
          title={cartItem.title}
          variantTitle={cartItem.variantTitle}
          quantity={cartItem.quantity}
        />
      ))}
      <p>
        <strong>Total Price: </strong>$99.99
      </p>
      <button className={styles.cart__button}>Place Order</button>
    </section>
  );
};

export default Cart;
