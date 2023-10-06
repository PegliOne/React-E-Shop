import styles from "./CartItem.module.scss";
import { useState, useEffect } from "react";
import { getProducts, getVariants } from "../../services/products-service";
import { updateCartItemQuantity } from "../../services/cart-service";

const CartItem = ({ id, title, variantTitle, quantity }) => {
  const [currentQuantity, setCurrentQuantity] = useState(quantity);
  const [product, setProduct] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    getProducts().then((products) => {
      const product = products.find((product) => product.title === title);
      setProduct(product);
    });
  }, []);

  const adjustQuantity = async (value) => {
    const variants = await getVariants(product.id);
    const variantQuantity = variants.find(
      (variant) => variant.title === variantTitle
    ).quantity;

    const newQuantity = currentQuantity + value;

    if (newQuantity > 5) {
      setMessage(`Error: Maximum order quantity reached`);
      return;
    }

    if (newQuantity > variantQuantity) {
      setMessage(
        `Error: Cannot order ${newQuantity} units of this product (${variantQuantity} in stock)`
      );
      return;
    }

    if (newQuantity <= 0) {
      return;
    }

    setCurrentQuantity(currentQuantity + value);
    updateCartItemQuantity(id, newQuantity);
    setMessage(null);
  };

  return (
    <>
      {product && (
        <article className={styles.item}>
          <div className={styles.item__div}>
            <img
              className={styles.item__image}
              src={`/${product.imageUrl}`}
              alt={title}
            />
          </div>
          <section className={styles.item__content}>
            <p className={styles.item__title}>
              <strong>{title}: </strong>
              {variantTitle}
            </p>
            <div className={styles.item__quantity}>
              <span className={styles.quantity__span}>
                <strong>Quantity: </strong>
                {currentQuantity}
              </span>
              <span className={styles.quantity__span}>
                <button
                  className={styles.quantity__button}
                  onClick={() => adjustQuantity(1)}
                >
                  +
                </button>
                <button
                  className={styles.quantity__button}
                  onClick={() => adjustQuantity(-1)}
                >
                  <span className={styles.button__span}>-</span>
                </button>
                <button className={styles.quantity__button}>Remove</button>
              </span>
            </div>
            <p
              className={`${styles.item__message} ${styles.item__message_error}`}
            >
              {message}
            </p>
          </section>
        </article>
      )}
    </>
  );
};

export default CartItem;
