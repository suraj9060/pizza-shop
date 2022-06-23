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


export const loginUser = (user) => async (dispatch) => {
    dispatch({ type: "USER_LOGIN_REQUEST" })
    try {
        const response = await axios.post("/api/users/login", user)
        console.log(response)
        dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data })
        localStorage.setItem("currentUser", JSON.stringify(response.data))
        window.location.href = "/"
    } catch (error) {
        dispatch({type:"USER_LOGIN_FAIL" , payload:error})
    }
}

export const logoutUser = () => dispatch => {
    localStorage.removeItem("currentUser")
    window.location.href = "/login"
}