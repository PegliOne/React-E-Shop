import React from "react";

const CartItem = () => {
  return (
    <article>
      <img src="/Final-Fantasy-X.jpeg" alt="Final Fantasy X" />
      <p>Final Fantasy X: PS4 (HD Remaster)</p>
      <div>
        <p>Quantity: 2</p>
        <button>+</button>
        <button>-</button>
        <button>Remove</button>
      </div>
    </article>
  );
};

export default CartItem;
