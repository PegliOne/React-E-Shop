import ProductsCarousel from "../../containers/ProductsCarousel/ProductsCarousel";
import ProductsGrid from "../../containers/ProductsGrid/ProductsGrid";
import { getProducts } from "../../services/products-service";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getProducts().then((products) => setProducts(products));
  }, []);

  const getFeaturedProducts = (products) => {
    return products.filter((product) => product.isFeatured);
  };

  const mobileAndTabletProductCount = 1;
  const desktopProductCount = 3;

  return (
    <>
      {products && (
        <main>
          <h2>Featured Games</h2>
          {products.length >= desktopProductCount && (
            <ProductsCarousel
              products={getFeaturedProducts(products)}
              productDisplayCount={desktopProductCount}
              isDesktop={true}
            />
          )}
          {products.length >= mobileAndTabletProductCount && (
            <ProductsCarousel
              products={getFeaturedProducts(products)}
              productDisplayCount={mobileAndTabletProductCount}
              isDesktop={false}
            />
          )}
          <h2>All Games</h2>
          <ProductsGrid products={products} />
        </main>
      )}
    </>
  );
};

export default HomePage;
