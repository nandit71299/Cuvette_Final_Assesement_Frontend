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

export const register = async (data) => {
  try {
    const response = await axios.post(`${apiUrl}/users/signup`, data);

    if (response.status === 200 && response.data.success) {
      return response.data;
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    if (error.response) {
      const status = error.response.status;
      const message = error.response.data.message || "An error occurred";
      if (status === 409) {
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
export const getCartData = async (cartId = null, token = null) => {
  try {
    let url = `${apiUrl}/cart/getCart`;
    let headers = {};

    // If cartId is provided, add it to the query parameters
    if (cartId) {
      url = `${url}?cartId=${cartId}`;
    }
    // If no cartId, check if token is available and add it to the headers
    else if (token) {
      headers = {
        Authorization: `Bearer ${token}`,
      };
    } else {
      return {
        success: false,
        message: "No token or cartId found. Please log in or provide a cartId.",
      };
    }

    // Make the API request
    const response = await axios.get(url, { headers });

    if (response.data.success) {
      return {
        success: true,
        cart: response.data.cart,
        cartId: response.data.cartId,
      };
    } else {
      return {
        success: false,
        message: response.data.message || "Failed to fetch cart data.",
      };
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

export const createOrder = async (data) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(`${apiUrl}/orders/create`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.data.success) {
      return response.data;
    } else {
      throw new Error(response.data.error.message || "Error creating order");
    }
  } catch (error) {
    return {
      success: false,
      message: error,
    };
  }
};

export const updateUser = async (user) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.put(
      `${apiUrl}/users/update?id=${user.userId}`,
      user,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.data.success) {
      return response.data;
    } else {
      throw new Error(response.data.error.message || "Error updating user");
    }
  } catch (error) {
    return {
      success: false,
      message: error,
    };
  }
};

export const addCard = async (cardData) => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.post(
      `${apiUrl}/users/${cardData.userId}/cards`,
      cardData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.data.success) {
      return response.data;
    } else {
      console.log(response);
      throw new Error(response.data.error.message || "Error adding card");
    }
  } catch (error) {
    return { success: false, message: error.message || "Error adding card" };
  }
};

export const updateCard = async (cartData) => {
  try {
    const token = localStorage.getItem("token");
    console.log(cartData);

    const response = await axios.put(
      `${apiUrl}/users/${cartData.userId}/cards/${cartData.cardId}/`,
      cartData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.data.success) {
      return response.data;
    } else {
      throw new Error(response.data.error.message || "Error updating cart");
    }
  } catch (error) {
    return { success: false, message: error.message || "Error updating cart" };
  }
};

export const deleteCard = async (cardData) => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.delete(
      `${apiUrl}/users/${cardData.userId}/cards/${cardData.cardId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.data.success) {
      return response.data;
    } else {
      throw new Error(response.data.error.message || "Error deleting card");
    }
  } catch (error) {
    return { success: false, message: error.message || "Error deleting card" };
  }
};
