const intialStateCustomer = {
  name: "",
  id: "",
  createdAt: "",
};

export default function reducerCustomer(state = intialStateCustomer, action) {
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
}
