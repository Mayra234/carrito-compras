import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="card h-100 shadow-sm product-card">
      <div className="ratio ratio-4x3 p-3">
        <img
          src={product.image}
          alt={product.title}
          className="img-fluid rounded mx-auto d-block"
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="card-body d-flex flex-column">
        <h6 className="card-title">{product.title}</h6>
        <div className="mb-2">
          <strong>${product.price.toLocaleString()}</strong>
        </div>

        {product.stock > 0 ? (
          <span className="badge bg-success mb-3">Stock: {product.stock}</span>
        ) : (
          <span className="badge bg-danger mb-3">Agotado</span>
        )}

        <button
          className="btn btn-dark mt-auto"
          disabled={product.stock === 0}
          onClick={() => dispatch(addToCart(product))}
          aria-label={`Agregar ${product.title} al carrito`}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
