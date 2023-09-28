import styles from "./ProductDetails.module.scss";

const ProductDetails = () => {
  return (
    <article className={styles.details}>
      <img
        className={styles.details__image}
        src="/Final-Fantasy-X.jpeg"
        alt="Final Fantasy X"
      />
      <section className={styles.details__content}>
        <h3>Versions Available</h3>
        <ul className={styles.details__list}>
          <li className={styles.list__item}>
            <strong>PS2 (Original):</strong> 5 units in stock
          </li>
          <li className={styles.list__item}>
            <strong>PS3 (HD Remaster):</strong> 8 units in stock
          </li>
          <li className={styles.list__item}>
            <strong>PS4 (HD Remaster):</strong> 10 units in stock
          </li>
          <li className={styles.list__item}>
            <strong>Xbox One (HD Remaster):</strong> 12 units in stock
          </li>
        </ul>
      </section>
    </article>
  );
};

export default ProductDetails;
