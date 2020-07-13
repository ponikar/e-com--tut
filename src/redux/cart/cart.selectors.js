import { createSelector } from "reselect";


// we selecting cart state from states;
const selectCart = state => state.cart;


// select cartItems from cart
export const selectCartItems = createSelector([selectCart], 
    cart => cart.cartItems
);

export const selectCartItemsCounts = createSelector([selectCartItems], 
    cartItem => cartItem.reduce((totalItems, item) => totalItems + item.quantity, 0))