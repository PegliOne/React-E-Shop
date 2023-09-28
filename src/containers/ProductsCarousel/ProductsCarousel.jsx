import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./ProductsCarousel.module.scss";

const ProductsCarousel = () => {
  return (
    <section className={styles.carousel}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </section>
  );
};

export default ProductsCarousel;
