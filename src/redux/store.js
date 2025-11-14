import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import {
  localStorageMiddleware,
  rehydrateStore,
} from "../utils/localStorageMiddleware";

export const store = configureStore({
  reducer: { cart: cartReducer },
  preloadedState: rehydrateStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
