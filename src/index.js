import React from 'react';
import './index.css';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import { render } from 'react-dom'
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import TacoReducer from './tacos/reducers/index';

const store = createStore(
    combineReducers({
        TACOS: TacoReducer,
    }),
    {}, // Pre loaded stated, although I am putting default state in each reducer
    compose(applyMiddleware(thunk)), //  Middle ware
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
