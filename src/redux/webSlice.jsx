import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: "",
};
export const webSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    account: (state, action) => {
      state.user = action.payload;
    },
  },
});
export const { account } = webSlice.actions;
export default webSlice.reducer;
