import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMusicList } from "../../api/request";
const initialState = {
  musicList: [],
  enterLoading: true,
};
export const fetchAsyncMusicList = createAsyncThunk("musiclist", async () => {
  const response = await getMusicList();
  return response.weekData;
});
const demoSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    changeEnterLoading(state, action) {
      state.enterLoading = action.payload;
    },
  },
  extraReducers: {
    [fetchAsyncMusicList.pending]: () => {
      console.log("Pending!");
    },
    [fetchAsyncMusicList.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, musicList: payload };
    },
    [fetchAsyncMusicList.rejected]: () => {
      console.log("Rejected!");
    },
  },
});

export const { changeEnterLoading } = demoSlice.actions;
export default demoSlice.reducer;
