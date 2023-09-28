import styles from "./ProductForm.module.scss";

const ProductForm = () => {
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
            <strong className={styles.form__label}>Price:</strong>$9.99
          </span>
        </div>
        <div className={styles.form__control}>
          <label htmlFor="versionInput">
            <strong className={styles.form__label}>Version:</strong>
          </label>
          <select>
            <option value="PS2">PS2 (Original)</option>
            <option value="PS3">PS3 (HD Remaster)</option>
            <option value="PS2">PS4 (HD Remaster)</option>
            <option value="PS2">Xbox One (HD Remaster)</option>
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
