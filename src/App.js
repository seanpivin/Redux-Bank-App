import CreateCustomer from "./features/customer/CreateCustomer";
import Customer from "./features/customer/Customer";
import AccountOperations from "./features/account/AccountOperations";
import BalanceDisplay from "./features/account/BalanceDisplay";
import { useSelector } from "react-redux";

function App() {
  const name = useSelector((state) => state.customer.name);
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {name === "" ? (
        <CreateCustomer />
      ) : (
        <>
          <CreateCustomer />
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
