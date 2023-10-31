import { useState, useRef } from "react";
import { createCartItem } from "../../services/cart-service";
import {
  checkItemInCart,
  checkItemAvailability,
  getCartItem,
} from "./ProductFormUtils";
import styles from "./ProductForm.module.scss";

const ProductForm = ({ title, unitPrice, variants }) => {
  const formRef = useRef(null);

  const [currentPrice, setCurrentPrice] = useState(0);
  const [message, setMessage] = useState(null);
  const [hasError, setHasError] = useState(false);

  const updatePrice = (e) => {
    const quantity = e.target.value;
    const currentPrice = quantity * unitPrice;
    setCurrentPrice(currentPrice);
  };

  const setError = (hasError, message) => {
    setHasError(hasError);
    setMessage(message);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = formRef.current;
    const cartItem = getCartItem(title, form);

    setCurrentPrice(cartItem.quantity * unitPrice);

    const isItemInCart = await checkItemInCart(title, cartItem.variantTitle);

    if (isItemInCart) {
      setError(true, "Error: Item Already In Cart");
      return;
    }

    const isItemAvailable = checkItemAvailability(
      variants,
      cartItem.variantTitle,
      cartItem.quantity
    );

    if (!isItemAvailable) {
      setError(true, "Error: Quantity Selected Exceeds Item Availability");
      return;
    }

    createCartItem(cartItem).then(() => {
      setError(false, "Item Added to Cart");
    });
  };

  return (
    <section className={styles.container}>
      <h3>Buy The Game</h3>
      <p>You can purchase a maximum of 5 of each item</p>
      <form
        className={styles.container__form}
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <div className={styles.form__control}>
          <label htmlFor="quantityInput">
            <strong className={styles.form__label}>Quantity:</strong>
          </label>
          <input
            className={styles.form__input}
            type="number"
            min="1"
            max="5"
            name="quantity"
            required
            onChange={updatePrice}
          />
          <span>
            <strong className={styles.form__label}>Price:</strong>$
            <span className={styles.form__price}>
              {currentPrice.toFixed(2)}
            </span>
          </span>
        </div>
        <div className={styles.form__control}>
          <label htmlFor="versionInput">
            <strong className={styles.form__label}>Version:</strong>
          </label>
          <select className={styles.form__select} name="variantTitle">
            {variants.map((variant) => (
              <option key={variant.title} value={variant.title}>
                {variant.title}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.form__control}>
          <button className={styles.form__button} type="submit">
            Add to Cart
          </button>
        </div>
        <p
          className={
            hasError
              ? `${styles.form__message} ${styles.form__message_error}`
              : styles.form__message
          }
        >
          {message}
        </p>
      </form>
    </section>
  );
};

export default ProductForm;
