import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseItems(state) {
      state.value += 1;
    },
    decreaseItems(state) {
      if (state.value > 1) state.value -= 1;
    },
  },
});

export const { increaseItems, decreaseItems } = cartSlice.actions;
export default cartSlice.reducer;
