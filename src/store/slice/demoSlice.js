import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMusicList } from "../../api/request";
const initialState = {
  musicList: [],
  showLoading: false,
};
export const fetchAsyncMusicList = createAsyncThunk("musiclist", async (params) => {
  console.log("asd");
  const response = await getMusicList(params);
  console.log(response);
  return response.data.weekData;
});
const demoSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    changeShowLoading(state, action) {
      state.showLoading = action.payload;
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

export const { changeShowLoading } = demoSlice.actions;
export default demoSlice.reducer;
