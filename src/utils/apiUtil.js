const API_PORT = import.meta.env.VITE_API_PORT;
const apiUrl = `http://localhost:${API_PORT}/api`;
import axios from "axios";

export const login = async (data) => {
  try {
    const response = await axios.post(`${apiUrl}/users/signin`, data);

    // If the response is successful (200 status and success flag)
    if (response.status === 200 && response.data.success) {
      return response.data;
    } else {
      throw new Error(response.data.message); // Handle unsuccessful responses
    }
  } catch (error) {
    // Check if the error is a response from the server
    if (error.response) {
      // If server responds with a 404 (Not Found), or any other error status
      const status = error.response.status;
      const message = error.response.data.message || "An error occurred"; // Use server message if available
      if (status === 404 || status === 401) {
        return { success: false, message: message }; // Return the server's message for 404
      }

      // For other errors, return the response message or fallback to default error message
      return { success: false, message: message };
    }

    // If there's no response (network error or something else), return a general error message
    return {
      success: false,
      message: error.message || "Network error, please try again later.",
    };
  }
};
