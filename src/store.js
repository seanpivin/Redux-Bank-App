import { createStore } from "redux";

const intialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

function reducer(state = intialState, action) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case "account/collectInterest":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}

function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}

function collectInterest(amount, purpose) {
  return { type: "account/collectInterest", payload: { amount, purpose } };
}

function payLoan() {
  return { type: "account/payLoan" };
}

store.dispatch(deposit(1000));
console.log(store.getState());
store.dispatch(withdraw(100));
console.log(store.getState());
store.dispatch(collectInterest(950, "Buy an iphone"));
console.log(store.getState());
store.dispatch(payLoan());
console.log(store.getState());
