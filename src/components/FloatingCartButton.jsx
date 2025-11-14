import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../redux/slices/cartSlice";

export const FloatingCartButton = () => {
  const dispatch = useDispatch();
  const items = useSelector((s) => s.cart.items);
  const count = items.reduce((acc, i) => acc + i.quantity, 0);

  return (
    <button
      className="floating-cart-btn"
      aria-label={`Abrir carrito, ${count} items`}
      onClick={() => dispatch(toggleCart())}>
      <span className="cart-emoji">🛒</span>
      {count > 0 && <span className="cart-badge">{count}</span>}
    </button>
  );
};
