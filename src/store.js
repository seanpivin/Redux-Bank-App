import { configureStore } from "@reduxjs/toolkit";

import accountReducer from "./features/account/accountSlice";
import reducerCustomer from "./features/customer/customerSlice";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: reducerCustomer,
  },
});

export default store;
