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
  cartId: null, // The ID of the cart
  items: [], // List of items in the cart
  subTotal: 0, // Subtotal (calculated from item prices)
  deliveryFee: 5, // Default delivery fee
  total: 0, // Total (subtotal + delivery fee)
};

export const fetchCartData =
  (cartId = null) =>
  async (dispatch) => {
    dispatch(fetchCartRequest()); // Set loading state

    try {
      const token = localStorage.getItem("token");

      // Case 1: Use token if available
      if (token) {
        const {
          success,
          cart,
          message,
          cartId: fetchedCartId,
        } = await getCartData(token);

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
            cartId: fetchedCartId, // Update cartId
            items: cart,
            subTotal,
            total,
            deliveryFee,
          })
        );
        return;
      }

      // Case 2: If no token, try using cartId
      if (cartId) {
        const {
          success,
          cart,
          message,
          cartId: fetchedCartId,
        } = await getCartData(cartId);

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
            cartId: fetchedCartId, // Update cartId
            items: cart,
            subTotal,
            total,
            deliveryFee,
          })
        );
        return;
      }

      // If neither token nor cartId is provided, fail gracefully
      dispatch(
        fetchCartFailure(
          "No token or cartId found. Please log in or provide a cartId."
        )
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
    const { success, cart, message, cartId } = await removeItemFromCartApi(
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
          cartId, // Update cartId
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
    const { success, cart, message, cartId } = await addToCart({
      itemId,
      token,
    });

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
          cartId, // Update cartId
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
      const { items, subTotal, total, deliveryFee, cartId } = action.payload;
      // Update state with new values, including cartId
      state.cartId = cartId;
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
