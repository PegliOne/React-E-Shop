import styles from "./ProductForm.module.scss";

// Ensure displayed price is multiplied by units ordered

const ProductForm = ({ unitPrice, variants }) => {
  return (
    <section>
      <h3>Buy The Game</h3>
      <p>You can purchase a maximum of 5 of each item.</p>
      <form className={styles.form}>
        <div className={styles.form__control}>
          <label htmlFor="quantityInput">
            <strong className={styles.form__label}>Quantity:</strong>
          </label>
          <input number="text" min="1" max="5" required />
          <span>
            <strong className={styles.form__label}>Price:</strong>${unitPrice}
          </span>
        </div>
        <div className={styles.form__control}>
          <label htmlFor="versionInput">
            <strong className={styles.form__label}>Version:</strong>
          </label>
          <select>
            {variants.map((variant) => (
              <option value={variant.title}>{variant.title}</option>
            ))}
          </select>
        </div>
        <div className={styles.form__control}>
          <button type="submit">Add to Cart</button>
        </div>
      </form>
    </section>
  );
};

export default ProductForm;
