import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  name: "",
  id: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState: intialState,
  reducers: {
    createCustomer: {
      prepare(name, id) {
        return { payload: { name, id, createdAt: new Date().toISOString() } };
      },
      reducer(state, action) {
        state.name = action.payload.name;
        state.id = action.payload.id;
        state.createdAt = action.payload.createdAt;
      },
    },
    updateName(state, action) {
      state.name = action.payload;
    },
  },
});

export const { createCustomer, updateName } = customerSlice.actions;

export default customerSlice.reducer;
