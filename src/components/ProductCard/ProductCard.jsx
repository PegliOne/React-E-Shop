import React from "react";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <Link to="/product/1">
      <article>
        <h3>Final Fantasy X</h3>
        <img src="/Final-Fantasy-X.jpeg" alt="Final Fantasy X" />
        <p>Price: $9.99</p>
        <p>Favourited Game</p>
      </article>
    </Link>
  );
};

export default ProductCard;
