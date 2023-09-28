import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./ProductsGrid.module.scss";

const ProductsGrid = () => {
  return (
    <section className={styles.grid}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </section>
  );
};

export default ProductsGrid;
