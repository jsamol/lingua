import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import './index.css';
import App from './containers/AppContainer';
import appReducer from './reducers/AppReducer';

const store = createStore(
    appReducer,
    applyMiddleware(
        thunkMiddleware
    )
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
