import React, { useState } from "react";

function Item({ name, category }) {
  let [inCart, addToCart] = useState("")

  const addItem = () => {
    addToCart(inCart = "in-cart")
  }

  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addItem}>
        Add to Cart
      </button>
    </li>
  );
}

export default Item;
