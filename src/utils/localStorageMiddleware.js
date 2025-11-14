const STORAGE_KEY = "prueba_carrito_v1";

export const localStorageMiddleware = (storeAPI) => (next) => (action) => {
  const result = next(action);
  try {
    const state = storeAPI.getState();
    const toSave = { cart: { items: state.cart.items } };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  } catch (e) {
    // ignore
  }
  return result;
};

export const rehydrateStore = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return undefined;
    const parsed = JSON.parse(raw);
    return { cart: { items: parsed.cart.items, isOpen: false } };
  } catch (e) {
    return undefined;
  }
};
