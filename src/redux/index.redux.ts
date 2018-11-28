import createSagaMiddleware from "redux-saga";
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import appReducers from './app/app.reducers';
import loginReducer from '../redux/login/login.reducers';

import rootSaga from './index.saga';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__,
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }
}

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

/* eslint-disable no-underscore-dangle */
const store = createStore(
    combineReducers({
        app: appReducers,
        login: loginReducer
    }),
    enhancer
);

sagaMiddleware.run(rootSaga);

export default store;
/* eslint-enable */