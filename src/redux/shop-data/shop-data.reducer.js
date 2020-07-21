
import { SHOPT_TYPE } from './shop.type';

const INITIAL_STATE = {
    collections:null,
    isFetching:false,
    errorMessage: undefined
}


const shopReducers = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SHOPT_TYPE.FETCH_COLLECTION_START:
            return {...state, isFetching:true};
        case SHOPT_TYPE.FETCH_COLLECTION_SUCEESS:
            return { ...state, collections: action.payload, isFetching:false};
        case SHOPT_TYPE.FETCH_COLLECTION_FAILURE:
            return {...state, isFetching:false, errorMessage: action.payload};
        default:
            return state;
    }
}

export default shopReducers;