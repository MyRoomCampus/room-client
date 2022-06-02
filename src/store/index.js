import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import registerSlice from "./slice/registerSlice";
import loginSlice from "./slice/loginSlice";

const rootReducer = combineReducers({
  registerData: registerSlice,
  loginData: loginSlice,
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;
