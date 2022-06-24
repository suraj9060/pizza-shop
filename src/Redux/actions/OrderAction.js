import axios from "axios";

export const placeOrder = (token, subtotal) => async (dispatch , getState) => {
    dispatch({ type: "PLACE_ORDER_REQUEST" })
    const currentUser = getState().loginUserReducer.currentUser;
    const cartItems = getState().currentUser.cartItems

    try {
        const res = await axios.post("/api/orders/placeorder", { token, subtotal, currentUser, cartItems })
        dispatch({ type: "PLACE_ORDER_SUCCESS" })
        console.log(res)
    } catch (error) {
        dispatch({ type: "PLACE_ORDER_FAIL" })
        console.log(error)
    }
    
}