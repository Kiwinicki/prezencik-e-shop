import { createSlice } from "@reduxjs/toolkit";

const name = "cart";

const initialState = {
	value: JSON.parse(localStorage.getItem(name)) || {},
};

const saveReduxToLS = (state) => localStorage.setItem(name, JSON.stringify(state.value));

export const cartSlice = createSlice({
	name,
	initialState,
	reducers: {
		increaseProductAmountInCart: (state, action) => {
			const prodId = Object.keys(action.payload)[0];
			if (state.value.hasOwnProperty(prodId)) {
				state.value[prodId].amount < 999 && state.value[prodId].amount++;
			} else {
				// if there was no product object add it to cart state
				state.value = {
					...state.value,
					[prodId]: { ...action.payload[prodId], amount: 1 },
				};
			}
			saveReduxToLS(state);
		},
		decreaseProductAmountInCart: (state, action) => {
			const prodId = Object.keys(action.payload)[0];
			if (state.value.hasOwnProperty(prodId)) {
				if (state.value[prodId].amount <= 1) {
					delete state.value[prodId];
				} else {
					state.value[prodId].amount--;
				}
			}
			saveReduxToLS(state);
		},
		clearCart: (state) => {
			state.value = {};
			saveReduxToLS(state);
		},
		removeProductFromCart: (state, action) => {
			delete state.value[action.payload]; // action.payload is product key string
			saveReduxToLS(state);
		},
	},
});

export const {
	increaseProductAmountInCart,
	decreaseProductAmountInCart,
	clearCart,
	removeProductFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
