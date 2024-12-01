import { createSlice } from "@reduxjs/toolkit";
import {
  getCartData,
  removeItemFromCartApi,
  addToCart,
} from "../utils/apiUtil"; // Import utility functions
import axios from "axios";
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
      let cartData;

      // Case 1: Try fetching cart using cartId if provided
      if (cartId) {
        cartData = await getCartData(cartId); // Pass only cartId

        if (!cartData.success) {
          dispatch(
            fetchCartFailure(cartData.message || "No items found in the cart")
          );
          return;
        }

        const { cart, cartId: fetchedCartId } = cartData;

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

      // Case 2: If no cartId, try fetching using token (if available)
      const token = localStorage.getItem("token");
      if (token) {
        // Verify token validity before fetching data
        const tokenVerification = await verifyToken(token);
        if (!tokenVerification.success) {
          dispatch(fetchCartFailure("Invalid or expired token."));
          return;
        }

        cartData = await getCartData(null, token); // Pass token if cartId is not provided

        if (!cartData.success) {
          dispatch(
            fetchCartFailure(cartData.message || "No items found in the cart")
          );
          return;
        }

        const { cart, cartId: fetchedCartId } = cartData;

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

      // Case 3: If neither cartId nor token is provided, return an error
      dispatch(
        fetchCartFailure(
          "No token or cartId found. Please log in or provide a cartId."
        )
      );
    } catch (error) {
      dispatch(fetchCartFailure(error.message || "Error fetching cart data"));
    }
  };

// Token verification utility function
export const verifyToken = async (token) => {
  try {
    const response = await axios.get(`${apiUrl}/verifyToken`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200 && response.data.success) {
      return response.data; // Token is valid
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    if (error.response) {
      const status = error.response.status;
      const message = error.response.data.message || "An error occurred";
      return { success: false, message };
    }
    return {
      success: false,
      message: error.message || "Network error, please try again later.",
    };
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
