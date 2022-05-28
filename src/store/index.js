import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import demoSlice from "./slice/demoSlice";
import registerSlice from "./slice/registerSlice";
import loginSlice from "./slice/loginSlice";


const rootReducer = combineReducers({
  music: demoSlice,
  registerData:registerSlice,
  loginData:loginSlice
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;
