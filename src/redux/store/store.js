import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import rootReducer from '../root.reducer'


// collecting middleware 
const middlewares = [logger];

// creating store 
const store = createStore(rootReducer,applyMiddleware(...middlewares));


export default store;
