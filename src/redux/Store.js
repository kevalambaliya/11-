import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./Slice/User";

const Store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default Store;
