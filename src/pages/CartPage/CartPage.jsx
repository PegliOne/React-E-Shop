import React from "react";
import Cart from "../../containers/Cart/Cart";
import { useState, useEffect } from "react";
import { getOrderedItems } from "../../services/products-service";

const CartPage = () => {
  const [orderedItems, setOrderedItems] = useState(null);

  useEffect(() => {
    getOrderedItems().then((data) => setOrderedItems(data));
  }, []);

  return (
    <main>
      <h2>Your Shopping Cart</h2>
      {orderedItems && <Cart orderedItems={orderedItems} />}
    </main>
  );
};

export default CartPage;
