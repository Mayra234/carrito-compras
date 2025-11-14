import React from "react";
import { useDispatch } from "react-redux";
import { updateQuantity, removeFromCart } from "../redux/slices/cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="d-flex align-items-center mb-3">
      <img
        src={item.image}
        alt={item.title}
        width={64}
        height={64}
        className="me-3 rounded"
      />
      <div className="flex-grow-1">
        <div className="d-flex justify-content-between">
          <strong>{item.title}</strong>
          <small>${(item.price * item.quantity).toLocaleString()}</small>
        </div>
        <div className="mt-2 d-flex align-items-center">
          <button
            className="btn btn-sm btn-outline-secondary"
            onClick={() =>
              dispatch(
                updateQuantity({ id: item.id, quantity: item.quantity - 1 })
              )
            }
            aria-label={`Disminuir ${item.title}`}>
            -
          </button>
          <span className="px-2">{item.quantity}</span>
          <button
            className="btn btn-sm btn-outline-secondary"
            onClick={() =>
              dispatch(
                updateQuantity({ id: item.id, quantity: item.quantity + 1 })
              )
            }
            aria-label={`Aumentar ${item.title}`}>
            +
          </button>
          <button
            className="btn btn-sm btn-danger ms-3"
            onClick={() => dispatch(removeFromCart(item.id))}
            aria-label={`Eliminar ${item.title}`}>
            🗑
          </button>
        </div>
        <small className="text-muted">Stock: {item.stock}</small>
      </div>
    </div>
  );
}
