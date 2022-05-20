import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import demoSlice from "./slice/demoSlice";

const rootReducer = combineReducers({
  music: demoSlice,
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;
