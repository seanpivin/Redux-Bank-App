const intialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

export default function Accountreducer(state = intialStateAccount, action) {
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
    case "account/convertCurrency":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
}

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

export function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}

export function collectInterest(amount, purpose) {
  return { type: "account/collectInterest", payload: { amount, purpose } };
}

export function payLoan() {
  return { type: "account/payLoan" };
}
