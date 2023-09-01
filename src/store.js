import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import accountReducer from "./features/account/accountSlice";
import reducerCustomer from "./features/customer/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: reducerCustomer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
