// uiStateSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMobile: false,
  isLoading: false, // Initially not loading
};

const uiStateSlice = createSlice({
  name: "uiState",
  initialState,
  reducers: {
    setIsMobile: (state, action) => {
      state.isMobile = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload; // Update isLoading state
    },
    clearUIState: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setIsMobile, setLoading, clearUIState } = uiStateSlice.actions;

export default uiStateSlice.reducer;
