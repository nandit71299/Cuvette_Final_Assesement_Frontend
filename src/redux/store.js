// store.js
import { configureStore } from "@reduxjs/toolkit";
import uiStateReducer from "./uiStateSlice"; // Import the uiState reducer
import authReducer from "./authSlice"; // Import the uiState reducer

const store = configureStore({
  reducer: {
    uiState: uiStateReducer, // Add the uiState reducer to the store
    auth: authReducer,
  },
});

export default store;
