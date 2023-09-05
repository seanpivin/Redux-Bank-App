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

/*export default function reducerCustomer(state = intialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        name: action.payload.name,
        id: action.payload.id,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
}

export function createCustomer(name, id, createdAt) {
  return {
    type: "customer/createCustomer",
    payload: { name, id, createdAt: new Date().toISOString() },
  };
}

export function updateName(name) {
  return { type: "customer/updateName", payload: name };
}*/
