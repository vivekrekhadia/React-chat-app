import { configureStore } from "@reduxjs/toolkit";
import { chatSlice } from "./ChatSlice";

const store = configureStore({
  reducer: { Chat: chatSlice.reducer },
});

export default store;
