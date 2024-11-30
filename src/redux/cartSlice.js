import { createSlice } from "@reduxjs/toolkit";
import {
  getCartData,
  removeItemFromCartApi,
  addToCart,
} from "../utils/apiUtil"; // Import utility functions

const API_URL = import.meta.env.VITE_API_URL;
const API_PORT = import.meta.env.VITE_API_PORT;
const apiUrl = `${API_URL}:${API_PORT}/api`;

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

    // Use the utility function to get the cart data
    const { success, cart, message } = await getCartData(token);

    if (!success) {
      dispatch(fetchCartFailure(message || "No items found in the cart"));
      return;
    }

    // Recalculate subtotal and total
    const subTotal = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const deliveryFee = 5;
    const total = subTotal + deliveryFee;

    dispatch(
      updateCart({
        items: cart,
        subTotal,
        total,
        deliveryFee,
      })
    );
  } catch (error) {
    dispatch(fetchCartFailure(error.message || "Error fetching cart data"));
  }
};

export const removeFromCart = (itemId) => async (dispatch) => {
  dispatch(fetchCartRequest()); // Set loading state

  try {
    const token = localStorage.getItem("token");

    if (!token) {
      dispatch(fetchCartFailure("No token found, please log in."));
      return;
    }

    // Use the utility function to remove the item from the cart
    const { success, cart, message } = await removeItemFromCartApi(
      token,
      itemId
    );

    if (success) {
      // If item removal is successful, update the cart in Redux
      const subTotal = cart.item.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      const deliveryFee = 5;
      const total = subTotal + deliveryFee;

      dispatch(
        updateCart({
          items: cart.item,
          subTotal,
          total,
          deliveryFee,
        })
      );
    } else {
      dispatch(fetchCartFailure(message || "Failed to remove item"));
    }
  } catch (error) {
    dispatch(
      fetchCartFailure(error.message || "Error removing item from cart")
    );
  }
};

export const addItemToCart = (itemId) => async (dispatch) => {
  dispatch(fetchCartRequest()); // Set loading state

  try {
    const token = localStorage.getItem("token");

    if (!token) {
      dispatch(fetchCartFailure("No token found, please log in."));
      return;
    }

    // Use the utility function to add the item to the cart
    const { success, cart, message } = await addToCart({ itemId, token });

    if (success) {
      // Update the cart in Redux after successful addition
      const subTotal = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      const deliveryFee = 5;
      const total = subTotal + deliveryFee;

      dispatch(
        updateCart({
          items: cart,
          subTotal,
          total,
          deliveryFee,
        })
      );
    } else {
      dispatch(fetchCartFailure(message || "Failed to add item to cart"));
    }
  } catch (error) {
    dispatch(fetchCartFailure(error.message || "Error adding item to cart"));
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

      // Update state with new values
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
