// uiStateSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false, // Initially not loading
};

const uiStateSlice = createSlice({
  name: "uiState",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload; // Update isLoading state
    },
    clearUIState: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setLoading, clearUIState } = uiStateSlice.actions;

export default uiStateSlice.reducer;
