
import UserActionsType  from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
    error:null,
};


const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {    
        case UserActionsType.SIGN_IN_SUCCESS:
            return {...state, currentUser: action.payload, error:null};
        case UserActionsType.SIGN_OUT_FAILED:
        case UserActionsType.SIGN_IN_FAILED:
        case UserActionsType.SIGN_UP_FAILED:
            return {...state, error: action.payload};
        case UserActionsType.SIGN_OUT_SUCCESS:
            return INITIAL_STATE;
        default: 
            return state;
    }
}

export default userReducer;