import { useState, useRef } from "react";
import { getCartItems, createCartItem } from "../../services/cart-service";
import styles from "./ProductForm.module.scss";

// Ensure displayed price is multiplied by units ordered
// Create components for inputs ?
// Refactor by moving functions to a utils file

const ProductForm = ({ title, unitPrice, variants }) => {
  const formRef = useRef(null);

  const [message, setMessage] = useState(null);
  const [hasError, setHasError] = useState(false);

  const checkItemInCart = (variantTitle) => {
    return getCartItems().then((cartItems) => {
      const existingItems = cartItems.filter(
        (cartItem) => cartItem.title === title
      );

      return existingItems?.some(
        (existingItem) => existingItem.variantTitle === variantTitle
      );
    });
  };

  const checkItemAvailability = (variantTitle, selectedQuantity) => {
    const selectedVariant = variants.find(
      (variant) => variant.title === variantTitle
    );
    return selectedVariant.quantity >= selectedQuantity;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = formRef.current;
    const formData = new FormData(form);
    const cartItem = {
      title: title,
      variantTitle: formData.get("variantTitle"),
      quantity: Number(formData.get("quantity")),
    };

    const isItemInCart = await checkItemInCart(cartItem.variantTitle);

    if (isItemInCart) {
      setHasError(true);
      setMessage("Error: Item Already In Cart");
      return;
    }

    const isItemAvailable = checkItemAvailability(
      cartItem.variantTitle,
      cartItem.quantity
    );

    if (!isItemAvailable) {
      setHasError(true);
      setMessage("Error: Quantity Selected Exceeds Item Availability");
      return;
    }

    createCartItem(cartItem).then(() => {
      setMessage("Item Added to Cart");
    });
  };

  return (
    <section className={styles.container}>
      <h3>Buy The Game</h3>
      <p>You can purchase a maximum of 5 of each item.</p>
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
          />
          <span>
            <strong className={styles.form__label}>Price:</strong>${unitPrice}
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
