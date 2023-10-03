import React from "react";
import CartItem from "../../components/CartItem/CartItem";
import styles from "./Cart.module.scss";

const Cart = ({ orderedItems }) => {
  return (
    <section className={styles.cart}>
      {orderedItems.map((orderedItem) => (
        <CartItem
          key={orderedItem.id}
          title={orderedItem.title}
          variantTitle={orderedItem.variantTitle}
          quantityOrdered={orderedItem.quantityOrdered}
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
