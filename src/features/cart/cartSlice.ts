import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    {
      pizzaId: 1,
      name: "ABC",
      quantity: 1,
      size: "L",
      unitPrice: 24,
      doughPrice: 4,
      sauces: [
        {
          name: "sos czosnkowy",
          price: 5,
          quantity: 2,
        },
      ],
      totalPrice: 38,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
  },
});

export function getCart(state) {
  return state.cart.cart;
}

export default cartSlice.reducer;
