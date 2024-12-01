const API_PORT = import.meta.env.VITE_API_PORT;
const API_URL = import.meta.env.VITE_API_URL;
const apiUrl = `${API_URL}:${API_PORT}/api`;

import axios from "axios";

// Login utility function
export const login = async (data) => {
  try {
    const response = await axios.post(`${apiUrl}/users/signin`, data);

    if (response.status === 200 && response.data.success) {
      return response.data;
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    if (error.response) {
      const status = error.response.status;
      const message = error.response.data.message || "An error occurred";
      if (status === 404 || status === 401) {
        return { success: false, message };
      }
      return { success: false, message };
    }
    return {
      success: false,
      message: error.message || "Network error, please try again later.",
    };
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

// Get all restaurants
export const getAllRestraunts = async (data) => {
  try {
    const response = await axios.get(`${apiUrl}/restraunts/getAll`, {
      headers: {
        Authorization: `Bearer ${data}`,
      },
    });
    return response.data;
  } catch (error) {
    return { success: false, message: "Internal Server Error" };
  }
};

// Get a single restaurant
export const getRestraunt = async (data) => {
  try {
    const response = await axios.get(
      `${apiUrl}/restraunts/getSingle/?id=${data.restrauntId}`,
      {
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }
    );
    if (response.data.success) {
      return response.data;
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    return error;
  }
};

// Get items of a specific restaurant
export const getItems = async (data) => {
  try {
    const response = await axios.get(
      `${apiUrl}/items/getAll/?id=${data.restrauntId}`,
      {
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }
    );
    if (response.data.success) {
      return response.data;
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    return error;
  }
};

// Add an item to the cart
export const addToCart = async (data) => {
  try {
    const response = await axios.post(
      `${apiUrl}/cart/add-to-cart`,
      {
        itemId: data.itemId,
      },
      {
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }
    );

    if (response.data.success) {
      return {
        success: true,
        cart: response.data.cart,
        cartId: response.data.cartId,
      };
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

// Get the cart data
export const getCartData = async (token) => {
  try {
    const response = await axios.get(`${apiUrl}/cart/getCart`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.data.success) {
      return {
        success: true,
        cart: response.data.cart,
        cartId: response.data.cartId,
      };
    } else {
      return { success: false, message: response.data.message };
    }
  } catch (error) {
    return {
      success: false,
      message: error.message || "Error fetching cart data",
    };
  }
};

// Remove an item from the cart
export const removeItemFromCartApi = async (token, itemId) => {
  try {
    const response = await axios.post(
      `${apiUrl}/cart/remove-from-cart`,
      { itemId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.data.success) {
      return {
        success: true,
        cart: response.data.cart,
        cartId: response.data.cartId,
      };
    } else {
      return { success: false, message: response.data.message };
    }
  } catch (error) {
    return {
      success: false,
      message: error.message || "Error removing item from cart",
    };
  }
};
