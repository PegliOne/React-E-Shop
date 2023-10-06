import { useState, useEffect } from "react";
import CartItem from "../../components/CartItem/CartItem";
import styles from "./Cart.module.scss";

const Cart = ({ cartItems }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const setCurrentPrice = (quantity, unitPrice) => {
    return quantity * unitPrice;
  };

  useEffect(() => {
    const totalPrice = cartItems.reduce(
      (total, cartItem) => total + setCurrentPrice(cartItem.quantity, 19.99),
      0
    );
    setTotalPrice(totalPrice);
  }, []);

  return (
    <section className={styles.cart}>
      {cartItems.map((cartItem) => (
        <CartItem
          key={cartItem.id}
          id={cartItem.id}
          title={cartItem.title}
          variantTitle={cartItem.variantTitle}
          quantity={cartItem.quantity}
          setCurrentPrice={setCurrentPrice}
        />
      ))}
      <p>
        <strong>Total Price: </strong>
        <span>${totalPrice.toFixed(2)}</span>
      </p>
      <button className={styles.cart__button}>Place Order</button>
    </section>
  );
};

export default Cart;
