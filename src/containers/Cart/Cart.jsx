import React from "react";
import CartItem from "../../components/CartItem/CartItem";

const Cart = ({ orderedItems }) => {
  return (
    <section>
      {orderedItems.map((orderedItem) => (
        <CartItem
          key={orderedItem.id}
          title={orderedItem.title}
          variantTitle={orderedItem.variantTitle}
          quantityOrdered={orderedItem.quantityOrdered}
        />
      ))}
      <p>
        <strong>Total Price: </strong>$99.99
      </p>
      <button>Place Order</button>
    </section>
  );
};

export default Cart;
