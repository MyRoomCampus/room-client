import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  enterLoading: true,
};

const logoutSlice = createSlice({
  name: "logout",
  initialState,
  reducers: {
    LogOut(state,payload) {
      state.enterLoading = action.payload;
    },
  },
  
});

export const { LogOut } = logoutSlice.actions;
export default logoutSlice.reducer;
