import React from "react";

const ProductForm = () => {
  return (
    <form>
      <h3>Buy The Game</h3>
      <p>You can purchase a maximum of 5 of each item.</p>
      <div>
        <label htmlFor="quantityInput">Quantity:</label>
        <input number="text" min="1" max="5" required />
      </div>
      <div>
        <label htmlFor="versionInput">Version:</label>
        <select>
          <option value="PS2">PS2 (Original)</option>
          <option value="PS3">PS3 (HD Remaster)</option>
          <option value="PS2">PS4 (HD Remaster)</option>
          <option value="PS2">Xbox One (HD Remaster)</option>
        </select>
      </div>
      <button type="submit">Add to Cart</button>
    </form>
  );
};

export default ProductForm;
