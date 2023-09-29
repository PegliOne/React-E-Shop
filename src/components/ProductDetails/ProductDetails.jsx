import styles from "./ProductDetails.module.scss";

const ProductDetails = ({ title, imageUrl, variants }) => {
  return (
    <article className={styles.details}>
      <img className={styles.details__image} src={`/${imageUrl}`} alt={title} />
      <section className={styles.details__content}>
        <h3>Versions Available</h3>
        <ul className={styles.details__list}>
          {variants.map((variant) => (
            <li className={styles.list__item} key={variant.title}>
              <strong>{variant.title}:</strong> {variant.quantity} units in
              stock
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default ProductDetails;
