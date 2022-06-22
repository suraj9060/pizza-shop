const initialState = {};

export const signInUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_SIGNIN_REQUEST":
      return {
        loading: true,
      };
    case "USER_SIGNIN_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "USER_SIGNIN_FAIL":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
