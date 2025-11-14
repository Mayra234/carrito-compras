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
      <img
        className="cart-emoji"
        src="img/carro.png"
        alt="Icon de compra"
        width={30}
      />
      {count > 0 && <span className="cart-badge">{count}</span>}
    </button>
  );
};
