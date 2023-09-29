import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ id, title, imageUrl, unitPrice, isFavourited }) => {
  return (
    <Link className={styles.card} to={`/product/${id}`}>
      <article className={styles.card__content}>
        <img className={styles.card__image} src={`/${imageUrl}`} alt={title} />
        <h3 className={styles.card__title}>{title}</h3>
        <p className={styles.card__para}>Price: ${unitPrice}</p>
        {isFavourited && <p className={styles.card__para}>Favourited Game</p>}
      </article>
    </Link>
  );
};

export default ProductCard;
