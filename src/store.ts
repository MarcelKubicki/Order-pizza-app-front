import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/features/cart/cartSlice";
import orderItemReducer from "@/features/menu/orderItemSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    orderItem: orderItemReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export default store;
