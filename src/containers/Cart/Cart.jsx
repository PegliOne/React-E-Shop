import CartItem from "../../components/CartItem/CartItem";
import styles from "./Cart.module.scss";

const Cart = ({ cartItems, totalPrice, updateLocalCart }) => {
  return (
    <section className={styles.cart}>
      {cartItems.map((cartItem) => (
        <CartItem
          key={cartItem.id}
          id={cartItem.id}
          title={cartItem.title}
          variantTitle={cartItem.variantTitle}
          quantity={cartItem.quantity}
          updateLocalCart={updateLocalCart}
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
