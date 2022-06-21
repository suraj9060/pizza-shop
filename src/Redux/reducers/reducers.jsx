

export const getAllPizzaReducer = (state = { pizzas: [],loading:false , error:"" }, action) => {
  switch (action.type) {
    case "GET_PIZZAS_REQUEST":
      return {
        ...state,
        loading: true,
        error:""
      }
    case "GET_PIZZAS_SUCCESS":
      return {
        pizzas: action.payload,
        loading: false,
        error:""
      }
    case "GET_PIZZAS_FAILURE":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
