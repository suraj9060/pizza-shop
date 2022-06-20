const initialState = {};

export const getAllPizzaReducer = (state = initialState, action) => {
  switch (action.payload) {
    case "GET_PIZZAS_REQUEST":
      return {
        ...state,
      };
    case "GET_PIZZAS_SUCCESS":
      return {
        pizzas: action.payload,
      };
    case "GET_PIZZAS_FAILURE":
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
