import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favourites: [],
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addItem(state) {},
    deleteItem(state) {},
  },
});

export const { addItem, deleteItem } = favouritesSlice.actions;

export default favouritesSlice.reducer;
