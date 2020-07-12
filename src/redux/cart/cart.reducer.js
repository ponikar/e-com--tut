import CartType from "./cart.type";

const INITIAL_STATE = {
    hidden:true
};


const cartReducer =  (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartType.SET_TOGGLE_HIDDEN: 
            return { ...state, hidden: !state.hidden };
        default:
            return state;
    }
}


export default cartReducer;
