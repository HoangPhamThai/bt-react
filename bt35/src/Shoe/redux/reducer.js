import { shoeArr } from "../data";
const initialState = {
  shoeArr: shoeArr,
  cart: [],
};

export let shoeReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case "addToCart":
      let cart = [...state.cart];
      let index = cart.findIndex((item) => item.id === payload.id);
      if (index === -1) {
        let newShoe = { ...payload, quantity: 1 };
        cart.push(newShoe);
      } else {
        cart[index].quantity++;
      }
      return {
        ...state,
        cart: cart,
      };
    case "deleteCartItem":
      let newCart = state.cart.filter((item) => {
        return item.id !== payload;
      });
      return {
        ...state,
        cart: newCart,
      };

    default:
      return state;
  }
};
