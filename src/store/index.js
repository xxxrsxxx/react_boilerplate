import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducers } from "./commerce";
const commerceRoot = combineReducers(reducers);

const _env = process.env.NODE_ENV !== "production";

const store = configureStore({
    reducer: { commerce: commerceRoot },
    devTools: _env,
});
export default store;
