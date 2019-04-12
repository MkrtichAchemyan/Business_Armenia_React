import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'
import allReducers from './reducers/index'
import {applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './sagas';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(allReducers,composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
