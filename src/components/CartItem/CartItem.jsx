import styles from "./CartItem.module.scss";
import { useState, useEffect } from "react";
import { getProducts, getVariants } from "../../services/products-service";
import {
  deleteCartItemById,
  updateCartItemQuantity,
} from "../../services/cart-service";
import { Link } from "react-router-dom";

const CartItem = ({ id, title, variantTitle, quantity, updateLocalCart }) => {
  const [currentQuantity, setCurrentQuantity] = useState(quantity);
  const [product, setProduct] = useState(null);
  const [message, setMessage] = useState(null);

  const currentPrice =
    product !== null ? currentQuantity * product.unitPrice : null;

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
    updateLocalCart();
  };

  const removeCartItem = () => {
    setProduct(null);
    deleteCartItemById(id);
    updateLocalCart();
  };

  return (
    <>
      {product && (
        <article className={styles.item}>
          <section className={styles.item__section}>
            <Link to={`/product/${product.id}`}>
              <img
                className={styles.item__image}
                src={`/${product.imageUrl}`}
                alt={title}
              />
            </Link>
          </section>
          <section className={styles.item__content}>
            <Link className={styles.item__link} to={`/product/${product.id}`}>
              <p className={styles.item__title}>
                <strong>{title}: </strong>
                {variantTitle}
              </p>
            </Link>
            <div className={styles.item__div}>
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
                  <button
                    className={styles.quantity__button}
                    onClick={removeCartItem}
                  >
                    Remove
                  </button>
                </span>
              </div>

              <div className={styles.item__price}>
                <strong>Price: </strong>
                <span className={styles.price__span}>
                  ${currentPrice.toFixed(2)}
                </span>
              </div>
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
