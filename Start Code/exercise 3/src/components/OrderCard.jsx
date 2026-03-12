import React from "react";

export default function OrderCard({ product, price, quantity, onQuantityChange }) {
  return (
    <div className="order">
      <div>
        <h4>{product}</h4>
        <small>${price.toFixed(2)}</small>
      </div>

      <div className="order-quantity">
        <div className="order-button" onClick={() => onQuantityChange(quantity - 1)}>-</div>
        <h4>{quantity}</h4>
        <div className="order-button" onClick={() => onQuantityChange(quantity + 1)}>+</div>
      </div>
    </div>
  );
}
