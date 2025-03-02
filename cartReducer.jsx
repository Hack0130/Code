// cartReducer.js

import {
	SET_CARTS,
	REMOVE_ITEM_FROM_CART,
	ADD_TO_CART,
	UPDATE_CART_QUANTITY,
	INCREASE_QUANTITY_CART,
	DECREASE_QUANTITY_CART,
} from '../actions/index';

const loadCartFromStorage = () => {
	try {
		const savedCart = localStorage.getItem('cart');
		return savedCart ? JSON.parse(savedCart) : { carts: [], totalAmount: 0 };
	} catch (error) {
		console.error('Error loading cart:', error);
		return { carts: [], totalAmount: 0 };
	}
};

const saveCartToStorage = (state) => {
	try {
		localStorage.setItem('cart', JSON.stringify(state));
	} catch (error) {
		console.error('Error saving cart:', error);
	}
};

const initialState = loadCartFromStorage();

const cartReducer = (state = initialState, action) => {
	console.log('cartReducer - received action:', action); // Debug log
	console.log('cartReducer - current state:', state); // Debug log

	let newState; // Declare newState to hold the updated state

	switch (action.type) {
		case SET_CARTS: {
			newState = {
				...state,
				carts: action.payload || [],
			};
			break;
		}
		case ADD_TO_CART: {
			const existingItem = state.carts.find(
				(item) => item.id === action.payload.id
			);

			let updatedCarts;
			if (existingItem) {
				updatedCarts = state.carts.map((item) =>
					item.productId === action.payload.id
						? { ...item, quantity: item.quantity + action.payload.quantity }
						: item
				);
			} else {
				updatedCarts = [
					...state.carts,
					{ ...action.payload, quantity: action.payload.quantity || 1 },
				];
			}

			newState = {
				...state,
				carts: updatedCarts,
				totalAmount: updatedCarts.reduce(
					(sum, item) => sum + Number(item.price) * Number(item.quantity),
					0
				),
			};
			break;
		}
		case REMOVE_ITEM_FROM_CART: {
			const updatedCarts = state.carts.filter(
				(item) => item.productId !== action.payload
			);

			newState = {
				...state,
				carts: updatedCarts,
				totalAmount: updatedCarts.reduce(
					(sum, item) => sum + Number(item.price) * Number(item.quantity),
					0
				),
			};
			break;
		}
		case UPDATE_CART_QUANTITY:
			newState = {
				...state,
				carts: state.carts.map((item) =>
					item.cartId === action.payload.id
						? { ...item, quantity: action.payload.quantity }
						: item
				),
			};
			break;
		case INCREASE_QUANTITY_CART: {
			const updatedCarts = state.carts.map((item) =>
				item.productId === action.payload
					? { ...item, quantity: item.quantity + 1 }
					: item
			);

			const newTotal = updatedCarts.reduce(
				(sum, item) => sum + Number(item.price) * Number(item.quantity),
				0
			);

			newState = {
				...state,
				carts: updatedCarts,
				totalAmount: newTotal,
			};
			break;
		}
		case DECREASE_QUANTITY_CART: {
			const updatedCarts = state.carts.map((item) =>
				item.productId === action.payload && item.quantity > 1
					? { ...item, quantity: item.quantity - 1 }
					: item
			);

			const newTotal = updatedCarts.reduce(
				(sum, item) => sum + Number(item.price) * Number(item.quantity),
				0
			);

			newState = {
				...state,
				carts: updatedCarts,
				totalAmount: newTotal,
			};
			break;
		}
		default:
			return state;
	}

	saveCartToStorage(newState); // Save the updated state to storage
	return newState;
};

export default cartReducer;
