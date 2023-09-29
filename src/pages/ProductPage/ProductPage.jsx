import ProductDetails from "../../components/ProductDetails/ProductDetails";
import ProductForm from "../../components/ProductForm/ProductForm";
import { useState, useEffect } from "react";
import { getProductById, getVariants } from "../../services/products-service";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  // I probably should refactor this
  useEffect(() => {
    getProductById(id).then((productData) => {
      getVariants(id).then((variantData) => {
        setProduct({ variants: variantData, ...productData });
      });
    });
  }, []);

  return (
    <>
      {product && (
        <main>
          <h2>{product.title}</h2>
          <ProductDetails
            title={product.title}
            imageUrl={product.imageUrl}
            variants={product.variants}
          />
          <ProductForm
            unitPrice={product.unitPrice}
            variants={product.variants}
          />
        </main>
      )}
    </>
  );
};

export default ProductPage;
