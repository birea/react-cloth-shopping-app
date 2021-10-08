import { CART_ADD, CART_REMOVE } from "./cartTypes";

//add article action
export function addToCart(id) {
  return {
    type: CART_ADD,
    payload: {
      id,
    },
  };
}

//remove article action
export function removeFromCart(id) {
  return {
    type: CART_REMOVE,
    payload: {
      id,
    },
  };
}
