import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import rootReducer from '../root.reducer'
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';


// collecting middleware 
const middlewares = [thunk];

    if(process.env.NODE_ENV === "development") {
        middlewares.push(logger);
    }
// creating store 
const store = createStore(rootReducer,applyMiddleware(...middlewares));

const persistor = persistStore(store);

export default { store, persistor };
