import type { RootState } from "@/store";
import type { Sauce } from "@/types/extras";
import type { OrderItemState } from "@/types/orderItem";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: OrderItemState = {
  value: {
    id: undefined,
    name: "",
    size: "",
    sizePrice: 0,
    dough: "",
    doughPrice: 0,
    quantity: 1,
    sauces: [],
    totalPrice: 0,
  },
};

const orderItemSlice = createSlice({
  name: "orderItem",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<{ id: number; name: string }>) {
      state.value.id = Number(action.payload.id);
      state.value.name = action.payload.name;
    },
    modifySize(
      state,
      action: PayloadAction<{ size: string; sizePrice: number }>,
    ) {
      state.value.size = action.payload.size;
      state.value.sizePrice = action.payload.sizePrice;
      orderItemSlice.caseReducers.countTotalPrice(state);
    },
    setDoughThicknes(
      state,
      action: PayloadAction<{ dough: string; doughPrice: number }>,
    ) {
      state.value.dough = action.payload.dough;
      state.value.doughPrice = action.payload.doughPrice;
      orderItemSlice.caseReducers.countTotalPrice(state);
    },
    increaseQuantity(state) {
      state.value.quantity++;
      orderItemSlice.caseReducers.countTotalPrice(state);
    },
    decreaseQuantity(state) {
      state.value.quantity--;
      if (state.value.quantity === 0) {
        orderItemSlice.caseReducers.clearOrderItem(state);
      }
      orderItemSlice.caseReducers.countTotalPrice(state);
    },
    addSauce(state, action: PayloadAction<Sauce>) {
      const sauce = state.value.sauces.find(
        (sauce) => sauce.id === action.payload.id,
      );
      if (sauce) {
        sauce.quantity++;
      } else {
        state.value.sauces.push({ ...action.payload, quantity: 1 });
      }
      orderItemSlice.caseReducers.countTotalPrice(state);
    },
    removeSauce(state, action: PayloadAction<{ id: number }>) {
      const sauce = state.value.sauces.find(
        (sauce) => sauce.id === action.payload.id,
      );
      if (sauce && sauce.quantity > 1) {
        sauce.quantity--;
      } else if (sauce) {
        const index = state.value.sauces.indexOf(sauce);
        state.value.sauces.splice(index, 1);
      }
      orderItemSlice.caseReducers.countTotalPrice(state);
    },
    countTotalPrice(state) {
      const saucesPrice = state.value.sauces.reduce(
        (acc, sauce) => acc + sauce.price * sauce.quantity,
        0,
      );
      state.value.totalPrice =
        (state.value.sizePrice + state.value.doughPrice + saucesPrice) *
        state.value.quantity;
    },
    clearOrderItem(state) {
      state.value = {
        id: undefined,
        name: "",
        size: "",
        sizePrice: 0,
        dough: "",
        doughPrice: 0,
        quantity: 1,
        sauces: [],
        totalPrice: 0,
      };
    },
  },
});

export function isRequiredSelected(state: RootState) {
  const { size, dough } = state.orderItem.value;
  return size !== "" && dough !== "";
}

export function getTotalPrice(state: RootState) {
  return state.orderItem.value.totalPrice;
}

export function getSize(state: RootState) {
  return state.orderItem.value.size;
}

export function getDough(state: RootState) {
  return state.orderItem.value.dough;
}

export function getSauceQuantity(id: number) {
  return function (state: RootState) {
    const sauce = state.orderItem.value.sauces.find((sauce) => sauce.id === id);
    return sauce ? sauce.quantity : 0;
  };
}

export function getTotalSauceQuantity(state: RootState) {
  const quantity = state.orderItem.value.sauces.reduce(
    (acc, curr) => acc + curr.quantity,
    0,
  );
  return quantity;
}

export function getQuantity(state: RootState) {
  return state.orderItem.value.quantity;
}

export const {
  addItem,
  modifySize,
  setDoughThicknes,
  addSauce,
  removeSauce,
  increaseQuantity,
  decreaseQuantity,
  clearOrderItem,
} = orderItemSlice.actions;

export default orderItemSlice.reducer;
