import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  name: null,
  email: null,
  country: null,
  addresses: [],
  cards: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user } = action.payload;
      state.userId = user._id;
      state.name = user.name;
      state.email = user.email;
      state.country = user.country;
      state.addresses = user.addresses || [];
      state.cards = user.cards || [];
    },
    clearUser: (state) => {
      state.userId = null;
      state.name = null;
      state.email = null;
      state.country = null;
      state.addresses = [];
      state.cards = [];
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
