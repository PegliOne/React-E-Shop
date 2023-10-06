import React from "react";
import Cart from "../../containers/Cart/Cart";
import { useState, useEffect } from "react";
import { getCartItems } from "../../services/cart-service";
import { getProducts } from "../../services/products-service";

const CartPage = () => {
  const [cartItems, setCartItems] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  // Refactor this by spliting the function up

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
      setTotalPrice(totalPrice);
    });
  };

  useEffect(() => {
    updateLocalCart();
  }, []);

  return (
    <main>
      <h2>Your Shopping Cart</h2>
      <p>You can purchase a maximum of 5 of each item</p>
      {cartItems && (
        <Cart
          cartItems={cartItems}
          totalPrice={totalPrice}
          updateLocalCart={updateLocalCart}
        />
      )}
    </main>
  );
};

export default CartPage;
