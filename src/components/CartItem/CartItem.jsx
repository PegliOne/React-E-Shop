import styles from "./CartItem.module.scss";
import { useState, useEffect } from "react";
import { getProducts } from "../../services/products-service";

const CartItem = ({ title, variantTitle, quantityOrdered }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProducts().then((products) => {
      const product = products.find((product) => product.title === title);
      setProduct(product);
    });
  }, []);

  return (
    <>
      {product && (
        <article className={styles.item}>
          <img
            className={styles.item__image}
            src={`/${product.imageUrl}`}
            alt={title}
          />
          <p className={styles.item__para}>
            <strong>{title}: </strong>
            {variantTitle}
          </p>

          <p className={styles.item__para}>
            <strong>Quantity: </strong>
            {quantityOrdered}
          </p>
          <button className={styles.item__button}>+</button>
          <button className={styles.item__button}>-</button>
          <button className={styles.item__button}>Remove</button>
        </article>
      )}
    </>
  );
};

export default CartItem;
