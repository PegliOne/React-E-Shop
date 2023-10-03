import ProductsCarousel from "../../containers/ProductsCarousel/ProductsCarousel";
import ProductsGrid from "../../containers/ProductsGrid/ProductsGrid";
import { getProducts } from "../../services/products-service";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  const getFeaturedProducts = (products) => {
    return products.filter((product) => product.isFeatured);
  };

  // TODO: Make the Product Carasoul component work with less than 3 products

  return (
    <>
      {products && (
        <main>
          <h2>Featured Games</h2>
          {products.length >= 3 && (
            <ProductsCarousel products={getFeaturedProducts(products)} />
          )}
          <h2>All Games</h2>
          <ProductsGrid products={products} />
        </main>
      )}
    </>
  );
};

export default HomePage;
