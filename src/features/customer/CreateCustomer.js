import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "./customerSlice";

function Customer() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  const distpatch = useDispatch();

  function handleClick() {
    if (!name || !id) return;
    distpatch(createCustomer(name, id));
  }

  return (
    <div>
      <h2>Create new customer</h2>
      <div className="inputs">
        <div>
          <label>Customer full name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>National ID</label>
          <input value={id} onChange={(e) => setId(e.target.value)} />
        </div>
        <button onClick={handleClick}>Create new customer</button>
      </div>
    </div>
  );
}

export default Customer;
