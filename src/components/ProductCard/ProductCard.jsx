import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.scss";

const ProductCard = () => {
  return (
    <Link className={styles.card} to="/product/1">
      <article className={styles.card__content}>
        <img
          className={styles.card__image}
          src="/Final-Fantasy-X.jpeg"
          alt="Final Fantasy X"
        />
        <h3 className={styles.card__title}>Final Fantasy X</h3>
        <p className={styles.card__para}>Price: $9.99</p>
        <p className={styles.card__para}>Favourited Game</p>
      </article>
    </Link>
  );
};

export default ProductCard;
