import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ id, title, imageUrl, unitPrice, isFavourited }) => {
  return (
    <Link className={styles.card} to={`/product/${id}`}>
      <article className={styles.card__content}>
        <img className={styles.card__image} src={`/${imageUrl}`} alt={title} />
        <section className={styles.card__section}>
          <h3 className={styles.card__title}>{title}</h3>
          <p className={styles.card__para}>Price: ${unitPrice}</p>
          <p className={styles.card__para}>
            {isFavourited && <strong>Favourited Game</strong>}
          </p>
        </section>
      </article>
    </Link>
  );
};

export default ProductCard;
