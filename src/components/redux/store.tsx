import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./features/formSubmitSlice";

const store = configureStore({
  reducer: { from: formReducer },
});

export default store;
