import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";
import accountReducer from "./features/account/accountSlice";
import reducerCustomer from "./features/customer/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: reducerCustomer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
