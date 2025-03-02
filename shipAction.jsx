import { INCREASE_QUANTITY, DECREASE_QUANTITY, ADD_TO_CART } from '../actions';

export const increaseQuantity = (productId) => {
  return {
    type: INCREASE_QUANTITY,
    payload: { productId }
  };
};

export const decreaseQuantity = (productId) => {
  return {
    type: DECREASE_QUANTITY,
    payload: { productId }
  };
};

export const addCart = (product) => {
  return {
    type: 'ADD_TO_CART',
    payload: product,
  };
};