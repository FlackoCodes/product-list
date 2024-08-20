import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
  cart: [],
  totalCart: 0,
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
    addItemToCart(state, { payload: currentItem }) {
      const itemExists = state.cart.some((item) => item.id === currentItem.id);

      if (!itemExists) {
        state.cart.push(currentItem);
        state.totalItems += 1;
      }
    },
    removeFromCart(state, { payload: currentItem }) {
      state.cart = state.cart.filter((item) => item.id !== currentItem.id);
      state.totalItems -= 1;
    },
    existsInCart(state, { payload: currentItem }) {
      return state.cart.some((item) => item.id === currentItem.id);
    },
  },
});

export const {
  addItemToCart,
  removeFromCart,
  existsInCart,
  increaseItems,
  decreaseItems,
} = cartSlice.actions;
export default cartSlice.reducer;
