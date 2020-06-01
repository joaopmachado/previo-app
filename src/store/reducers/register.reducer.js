const INITIAL_STATE = {
  cpf: null,
  name: null,
  birthDay: null,
  income: null,
};

export default function auth(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case "SET_CPF":
      return {
        ...state,
        cpf: payload,
      };
    case "SET_NAME":
      return {
        ...state,
        name: payload,
      };
    case "SET_BIRTHDAY":
      return {
        ...state,
        birthDay: payload,
      };
    case "SET_INCOME":
      return {
        ...state,
        income: payload,
      };
    case "CLEAR":
      return { cpf: null, name: null, birthDay: null, income: null };
    default:
      return state;
  }
}
