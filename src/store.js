import { createStore, combineReducers } from "redux";
import accountReducer from "./features/account/accountSlice";
import reducerCustomer from "./features/customer/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: reducerCustomer,
});

const store = createStore(rootReducer);

export default store;
