import { useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./ProductsCarousel.module.scss";
import CarouselButton from "../../components/CarouselButton/CarouselButton";

const ProductsCarousel = ({ products, productDisplayCount, isDesktop }) => {
  const indicesArray = [0, 1, 2].slice(0, productDisplayCount);

  const [indices, setIndices] = useState(indicesArray);

  const updateIndices = (step) => {
    const newIndices = indices.map((index) => {
      let newIndex = (index + step) % products.length;
      if (newIndex < 0) {
        newIndex += products.length;
      }
      return newIndex;
    });
    setIndices(newIndices);
  };

  let carouselClasses = styles.carousel;
  if (isDesktop) {
    carouselClasses += ` ${styles.carousel_desktop}`;
  } else {
    carouselClasses += ` ${styles.carousel_mobile_or_tablet}`;
  }

  return (
    <section className={carouselClasses}>
      {products.length > productDisplayCount && (
        <CarouselButton
          direction="left"
          updateIndices={updateIndices}
          step={-1}
        />
      )}
      {indices.map((index) => (
        <ProductCard
          key={products[index].id}
          id={products[index].id}
          title={products[index].title}
          imageUrl={products[index].imageUrl}
          unitPrice={products[index].unitPrice}
          isFavourited={products[index].isFavourited}
        />
      ))}
      {products.length > productDisplayCount && (
        <CarouselButton
          direction="right"
          updateIndices={updateIndices}
          step={1}
        />
      )}
    </section>
  );
};

export default ProductsCarousel;
