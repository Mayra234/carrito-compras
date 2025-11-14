const isProd = process.env.NODE_ENV === "production";

module.exports = {
  output: "export",
  assetPrefix: isProd ? "/carrito-compras/" : "",
  images: { unoptimized: true },
};
