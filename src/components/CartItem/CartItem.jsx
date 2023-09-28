import styles from "./CartItem.module.scss";

const CartItem = () => {
  return (
    <article className={styles.item}>
      <img
        className={styles.item__image}
        src="/Final-Fantasy-X.jpeg"
        alt="Final Fantasy X"
      />
      <p className={styles.item__para}>
        <strong>Final Fantasy X: </strong>PS4 (HD Remaster)
      </p>

      <p className={styles.item__para}>
        <strong>Quantity: </strong>2
      </p>
      <button className={styles.item__button}>+</button>
      <button className={styles.item__button}>-</button>
      <button className={styles.item__button}>Remove</button>
    </article>
  );
};

export default CartItem;
