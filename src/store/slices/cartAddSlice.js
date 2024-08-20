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
    increaseItemQtyInCart(state, { payload }) {
      const newCartItems = state.cart?.map((item) => {
        if (item.id === payload) {
          item.qtyToBuy += 1;
          return item;
        }
        return item;
      });
      state.cart = newCartItems;
    },
    decreaseItemQtyInCart(state, { payload }) {
      const newCartItems = state.cart?.map((item) => {
        if (item.id === payload) {
          if (item.qtyToBuy <= 1) {
            item.qtyToBuy = 1;
          } else {
            item.qtyToBuy -= 1;
          }
          return item;
        }
        return item;
      });
      state.cart = newCartItems;
    },
    addItemToCart(state, { payload: currentItem }) {
      const itemExists = state.cart.some((item) => item.id === currentItem.id);

      if (!itemExists) {
        const newItem = Object.assign({ qtyToBuy: 1 }, currentItem);
        state.cart.push(newItem);
        state.totalCart += 1;
      }
    },
    decreaseItems() {},
    increaseItems() {},

    removeFromCart(state, { payload: currentItem }) {
      state.cart = state.cart.filter((item) => item.id !== currentItem.id);
      state.totalItems -= 1;
    },
    existsInCart(state, { payload: currentItem }) {
      return state.cart.some((item) => item.id === currentItem.id);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItemToCart,
  removeFromCart,
  existsInCart,
  increaseItemQtyInCart,
  decreaseItemQtyInCart,
  clearCart,
  decreaseItems,
  increaseItems,
} = cartSlice.actions;
export default cartSlice.reducer;
