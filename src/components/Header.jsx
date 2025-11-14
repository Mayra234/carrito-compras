import React from "react";

export const Header = () => {
  return (
    <header className="bg-dark text-white py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <h5 className="m-0">Mi Tienda</h5>
        <div className="d-none d-md-block">Explora nuestros productos</div>
      </div>
    </header>
  );
};
