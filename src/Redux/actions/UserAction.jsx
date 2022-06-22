 import axios from "axios"
export const signInUser = (user) => async (dispatch) => {
    dispatch({ type: "USER_SIGNIN_REQUEST" })
    try {
        const res = await axios.post("/api/users/signup", user)
        dispatch({type:"USER_SIGNIN_SUCCESS"})
    } catch (err) {
        dispatch({type:"USER_SIGNIN_FAIL" ,payload:err})
    }
}