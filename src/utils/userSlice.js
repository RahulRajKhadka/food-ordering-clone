import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",  // Empty string initially
    phone: "", // Empty string initially
  },
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.phone = action.payload.phone;
    },
    clearUser: (state) => {
      state.name = "";
      state.phone = "";
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
