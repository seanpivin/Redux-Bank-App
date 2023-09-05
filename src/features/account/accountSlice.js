import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState: intialState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
      state.isLoading = false;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    collectInterest: {
      prepare(amount, purpose) {
        return { payload: { amount, purpose } };
      },

      reducer(state, action) {
        if (state.loan > 0) return;
        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balance += action.payload.amount;
      },
    },
    payLoan(state) {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
    convertCurrency(state) {
      state.isLoading = true;
    },
  },
});

export function deposit(amount, currency) {
  if (currency === "USD") {
    return { type: "account/deposit", payload: amount };
  }
  return async function (distpatch, getState) {
    distpatch({ type: "account/convertCurrency" });

    const respone = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}from=${currency}&to=USD`
    );
    const data = await respone.json();
    const convertedAmount = data.rates.USD;

    distpatch({ type: "account/deposit", payload: convertedAmount });
  };
}

export const { withdraw, collectInterest, payLoan } = accountSlice.actions;
export default accountSlice.reducer;
