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
          <div className={styles.item__div}>
            <img
              className={styles.item__image}
              src={`/${product.imageUrl}`}
              alt={title}
            />
          </div>
          <section>
            <p className={styles.item__title}>
              <strong>{title}: </strong>
              {variantTitle}
            </p>
            <div className={styles.item__quantity}>
              <span className={styles.quantity__span}>
                <strong>Quantity: </strong>
                {quantityOrdered}
              </span>
              <span className={styles.quantity__span}>
                <button className={styles.quantity__button}>+</button>
                <button className={styles.quantity__button}>
                  <span className={styles.button__span}>-</span>
                </button>
                <button className={styles.quantity__button}>Remove</button>
              </span>
            </div>
          </section>
        </article>
      )}
    </>
  );
};

export default CartItem;
