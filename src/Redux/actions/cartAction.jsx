export const addToCart = (pizza, quentity, varients) => (dispatch , getState) => {
  var cartItem = {
    name: pizza.name,
    _id: pizza._id,
    image: pizza.image,
    varients: varients,
    quantity: quentity,
    prices: pizza.prices,
    price: pizza.prices[0][varients] * quentity,
  };

  dispatch({ type: "ADD_TO_CART", payload: cartItem });
  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().cartReducer.cartItems)
  );
};
