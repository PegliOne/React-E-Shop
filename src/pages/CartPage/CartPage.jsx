import React from "react";
import Cart from "../../containers/Cart/Cart";
import { useState, useEffect } from "react";
import { getCartItems, deleteCartItemById } from "../../services/cart-service";
import {
  getProducts,
  getVariants,
  updateVariantQuantity,
} from "../../services/products-service";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [hasCompletedPurchase, setHasCompletedPurchase] = useState(false);

  // TODO: Refactor this by spliting the functions up

  const updateLocalCart = () => {
    const promises = [getCartItems(), getProducts()];
    Promise.all(promises).then((data) => {
      const [cartItems, products] = data;
      const cartItemsWithPrices = cartItems.map((cartItem) => {
        const product = products.find(
          (product) => product.title === cartItem.title
        );
        const unitPrice = product.unitPrice;
        return { unitPrice: unitPrice, ...cartItem };
      });
      const totalPrice = cartItemsWithPrices.reduce(
        (total, cartItem) => total + cartItem.unitPrice * cartItem.quantity,
        0
      );
      setCartItems(cartItems);
      setProducts(products);
      setTotalPrice(totalPrice);
    });
  };

  // TODO: Refactor this by removing unncessary filtering

  const purchaseCart = async () => {
    const cartItemTitles = cartItems.map((cartItem) => cartItem.title);
    const productsInCart = products.filter((product) =>
      cartItemTitles.includes(product.title)
    );
    await productsInCart.map((product) => {
      getVariants(product.id).then((variants) => {
        const cartItemVariantTitles = cartItems.map(
          (cartItem) => cartItem.variantTitle
        );
        cartItemVariantTitles.forEach((variantTitle) => {
          const variantToUpdate = variants.find(
            (variant) => variant.title === variantTitle
          );
          const currentCartItem = cartItems.find(
            (cartItem) =>
              cartItem.variantTitle === variantTitle &&
              cartItem.title === product.title
          );
          const newQuantity =
            variantToUpdate.quantity - currentCartItem.quantity;
          updateVariantQuantity(product.id, variantToUpdate.id, newQuantity);
        });
      });
    });
    cartItems.forEach((cartItem) => deleteCartItemById(cartItem.id));
    setCartItems([]);
    setHasCompletedPurchase(true);
  };

  useEffect(() => {
    updateLocalCart();
  }, []);

  return (
    <main>
      <h2>Your Shopping Cart</h2>
      <p>You can purchase a maximum of 5 of each item</p>
      {cartItems.length > 0 && (
        <Cart
          cartItems={cartItems}
          totalPrice={totalPrice}
          updateLocalCart={updateLocalCart}
          purchaseCart={purchaseCart}
        />
      )}
      {hasCompletedPurchase && (
        <p className="success">
          <strong>Purchase Successful!</strong>
        </p>
      )}
      {cartItems.length === 0 && (
        <p>You currently have no items in your cart</p>
      )}
    </main>
  );
};

export default CartPage;
