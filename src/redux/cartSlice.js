import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: ['cart', 'wishlist'],
  initialState: {
    cart: [], wishlist :[]
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },

    addToWishlist: (state, action) => {
      const itemInWishlist = state.wishlist.find((item) => item.id === action.payload.id);
      if (itemInWishlist) {
        itemInWishlist.quantity++;
      } else {
        state.wishlist.push({ ...action.payload, quantity: 1 });
      }
    },

    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter((item) => item.id !== action.payload);
      state.cart = removeItem;
    },

    removeItemWish: (state, action) => {
      const removeItem = state.wishlist.filter((item) => item.id !== action.payload);
      state.wishlist = removeItem;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {addToCart,addToWishlist,incrementQuantity,decrementQuantity,removeItem,removeItemWish,} = cartSlice.actions;