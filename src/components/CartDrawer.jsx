import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart, clearCart } from "../redux/slices/cartSlice";
import { CartItem } from "./CartItem";

export const CartDrawer = () => {
  const { items, isOpen } = useSelector((s) => s.cart);
  const dispatch = useDispatch();

  const shipping = 15000;
  const taxRate = 0.19;

  const subtotal = items.reduce((acc, i) => acc + i.price * i.quantity, 0);
  const taxes = Math.round(subtotal * taxRate);
  const total = subtotal + taxes + (items.length ? shipping : 0);

  return (
    <aside
      className={`cart-drawer ${isOpen ? "open" : ""}`}
      aria-hidden={!isOpen}>
      <div className="drawer-header d-flex justify-content-between align-items-center">
        <h5 className="m-0">Carrito</h5>
        <div>
          <button
            className="btn btn-sm btn-outline-dark me-2"
            onClick={() => dispatch(clearCart())}>
            Vaciar
          </button>
          <button
            className="btn btn-sm btn-outline-secondary"
            onClick={() => dispatch(toggleCart())}>
            Cerrar ✕
          </button>
        </div>
      </div>

      <div className="drawer-body p-3">
        {items.length === 0 ? (
          <div className="text-center text-muted my-5">
            <p className="mb-3">Tu carrito está vacío.</p>
            <button
              className="btn btn-primary"
              onClick={() => dispatch(toggleCart())}>
              Seguir comprando
            </button>
          </div>
        ) : (
          <div>
            {items.map((it) => (
              <CartItem key={it.id} item={it} />
            ))}

            <hr />
            <div className="d-flex justify-content-between">
              <small>Subtotal</small>
              <strong>${subtotal.toLocaleString()}</strong>
            </div>
            <div className="d-flex justify-content-between">
              <small>Impuestos (19%)</small>
              <small>${taxes.toLocaleString()}</small>
            </div>
            <div className="d-flex justify-content-between">
              <small>Envío</small>
              <small>${items.length ? shipping.toLocaleString() : 0}</small>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <h6>Total</h6>
              <h6>${total.toLocaleString()}</h6>
            </div>

            <button className="btn btn-success w-100 mt-3">
              Finalizar compra
            </button>
          </div>
        )}
      </div>
    </aside>
  );
};
