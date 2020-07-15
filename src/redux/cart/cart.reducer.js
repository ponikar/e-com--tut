import CartType from "./cart.type";
import { addItemToCart, removeFromCart } from "./cart.utils";
import CartItem from "../../components/cart-item/cart-item.component";

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
        case CartType.CLEART_ITEM_FROM_CART:
            return {...state, cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id) };
        case CartType.REMOVE_ITEM:
            return {...state, cartItems:removeFromCart(state.cartItems, action.payload)}
        default:
            return state;
    }
}


export default cartReducer;
