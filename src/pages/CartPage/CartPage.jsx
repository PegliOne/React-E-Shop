import React from "react";
import Cart from "../../containers/Cart/Cart";
import { useState, useEffect } from "react";
import { getCartItems } from "../../services/cart-service";

const CartPage = () => {
  const [cartItems, setCartItems] = useState(null);

  useEffect(() => {
    getCartItems().then((data) => setCartItems(data));
  }, []);

  return (
    <main>
      <h2>Your Shopping Cart</h2>
      <p>You can purchase a maximum of 5 of each item</p>
      {cartItems && <Cart cartItems={cartItems} />}
    </main>
  );
};

export default CartPage;
