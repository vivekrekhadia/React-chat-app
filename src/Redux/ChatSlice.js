import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
  name: "chat",
  initialState: { chat: null },
  reducers: {
    addChat: (state, action) => {
      state.chat.text.push(action.payload);
    },
  },
});
