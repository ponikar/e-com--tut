import SHOP_DATA from './collection.data'
const INITIAL_STATE = {
    collections:SHOP_DATA
}


const shopReducers = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default shopReducers;