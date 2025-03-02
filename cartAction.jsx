import axios from "axios";
import { SET_CARTS, REMOVE_ITEM_FROM_CART, ADD_TO_CART, UPDATE_CART_QUANTITY, INCREASE_QUANTITY_CART, DECREASE_QUANTITY_CART , UPDATE_CART} from "../actions/index";

//for dummy products
export const setCarts = (carts) => {
  // Only dispatch if carts is not empty
  if (carts && carts.length > 0) {
    return {
      type: SET_CARTS,
      payload: carts
    };
  }
  // Return a no-op action if carts is empty
  return { type: 'NO_OP' }; // No operation action
};

//for fetching products from mysql
// export const setCarts = (products) => ({
//   type: 'SET_CARTS',
//   payload: products
// })

export const addToCart = (product) => {
  console.log('cartAction - addToCart called with:', product); // Debug log
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (id) => ({
  type: REMOVE_ITEM_FROM_CART,
  payload: id
});

export const updateCart = (data) => ({
    type: UPDATE_CART,
    payload: data,
});

export const updateCartQuantity = (id, quantity) => ({
    type: UPDATE_CART_QUANTITY,
    payload: { id, quantity },
});

export const increaseQuantityCart = (id) => ({
  type: INCREASE_QUANTITY_CART,
  payload: id
});

export const decreaseQuantityCart = (id) => ({
  type: DECREASE_QUANTITY_CART,
  payload: id
});

// export const fetchCartData = () => async (dispatch) => {
//   try {
//     const response = await axios.get("http://18.156.6.35:8080/api/cart"); // Replace with your actual backend endpoint
//     dispatch({
//       type: SET_CARTS,
//       payload: response.data,
//     });
//   } catch (error) {
//     console.error("Failed to fetch cart data:", error);
//   }
// };
  


  ////Thunk creator//////

  