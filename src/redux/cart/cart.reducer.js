import CartType from "./cart.type";
import { addItemToCart } from "./cart.utils";

const INITIAL_STATE = {
    hidden:true,
    cartItems: []
};


const cartReducer =  (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartType.SET_TOGGLE_HIDDEN: 
            return { ...state, hidden: !state.hidden };
        case CartType.ADD_TO_CART:
            //using utility functions (helper function) 
            return  {...state, cartItems: addItemToCart(state.cartItems,action.payload) }
        default:
            return state;
    }
}


export default cartReducer;
