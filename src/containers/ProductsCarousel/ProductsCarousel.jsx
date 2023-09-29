import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./ProductsCarousel.module.scss";

const ProductsCarousel = ({ products }) => {
  return (
    <section className={styles.carousel}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          imageUrl={product.imageUrl}
          unitPrice={product.unitPrice}
          isFavourited={product.isFavourited}
        />
      ))}
    </section>
  );
};

export default ProductsCarousel;
