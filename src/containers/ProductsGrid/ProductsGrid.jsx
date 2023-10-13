import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./ProductsGrid.module.scss";

const ProductsGrid = ({ products }) => {
  return (
    <section className={styles.grid}>
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

export default ProductsGrid;
