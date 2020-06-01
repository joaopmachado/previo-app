const INITIAL_STATE = {
  token: null,
  user: null,
};

export default function auth(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case "SET_TOKEN":
      return {
        ...state,
        token: payload.token,
      };
    case "SET_USER":
      return {
        ...state,
        user: payload.user,
      };
    case "LOGOUT":
      return { token: null, user: null };
    default:
      return state;
  }
}
