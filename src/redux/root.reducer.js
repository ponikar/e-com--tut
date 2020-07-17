import userReducer from "./user/user.reducer"
import { combineReducers } from 'redux'
import cartReducer from "./cart/cart.reducer";
import { persistReducer } from "redux-persist";
import directoryReducer from './directory/directory.reducer'
import storage from 'redux-persist/lib/storage'
import shopReducers from "./shop-data/shop-data.reducer";



const persistConfig = {
    key: "root",
    storage,
    whilelist: ['cart']
};

const rootReducers = combineReducers({
    user:userReducer,
    cart:cartReducer,
    directory:directoryReducer,
    shop:shopReducers
});
 
export default persistReducer(persistConfig ,rootReducers);