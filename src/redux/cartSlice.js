import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const API_PORT = import.meta.env.VITE_API_PORT;

const initialState = {
  loading: false,
  error: null,
  items: [], // List of items in the cart
  subTotal: 0, // Subtotal (calculated from item prices)
  deliveryFee: 5, // Default delivery fee
  total: 0, // Total (subtotal + delivery fee)
};

export const fetchCartData = () => async (dispatch) => {
  dispatch(fetchCartRequest()); // Set loading state

  try {
    const token = localStorage.getItem("token");

    if (!token) {
      dispatch(fetchCartFailure("No token found, please log in."));
      return;
    }

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await axios.get(
      `${API_URL}:${API_PORT}/api/cart/getCart`,
      { headers }
    );

    const cart = response.data.cart; // Get cart from the response

    // Check if cart exists and has items
    if (!cart || cart.length === 0) {
      dispatch(fetchCartFailure("No items found in the cart"));
      return;
    }

    // Recalculate subtotal and total
    const subTotal = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    // Delivery fee is assumed to be a constant (5 in this case)
    const deliveryFee = 5;
    const total = subTotal + deliveryFee; // Add delivery fee to subtotal

    // Dispatch updateCart with the data we need
    dispatch(
      updateCart({
        items: cart, // Use the cart items directly
        subTotal,
        total,
        deliveryFee, // Include delivery fee in state
      })
    );
  } catch (error) {
    dispatch(fetchCartFailure(error.message || "Error fetching cart data"));
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    fetchCartRequest: (state) => {
      state.loading = true;
      state.error = null;
    },

    fetchCartFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    updateCart: (state, action) => {
      const { items, subTotal, total, deliveryFee } = action.payload;

      // Update the items, subTotal, and total in the state
      state.items = items;
      state.subTotal = subTotal;
      state.deliveryFee = deliveryFee;
      state.total = total;

      state.loading = false;
    },

    removeItemFromCart: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item._id !== itemId);
      state.subTotal = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      state.total = state.subTotal + state.deliveryFee;
    },
  },
});

export const {
  updateCart,
  removeItemFromCart,
  fetchCartRequest,
  fetchCartFailure,
} = cartSlice.actions;

export default cartSlice.reducer;
