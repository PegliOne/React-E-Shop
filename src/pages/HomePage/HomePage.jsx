import ProductsCarousel from "../../containers/ProductsCarousel/ProductsCarousel";
import ProductsGrid from "../../containers/ProductsGrid/ProductsGrid";

const HomePage = () => {
  return (
    <main>
      <h2>Featured Games</h2>
      <ProductsCarousel />
      <h2>All Games</h2>
      <ProductsGrid />
    </main>
  );
};

export default HomePage;
