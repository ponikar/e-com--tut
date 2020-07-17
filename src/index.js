import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import store from './redux/store/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
    <PersistGate persistor={store.persistor}>
    <Provider store={store.store}>
        <App />
    </Provider>
    </PersistGate>,
  document.getElementById('root')
);
