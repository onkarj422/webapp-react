import { createEpicMiddleware } from 'redux-observable';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import appReducers from './app/reducer';
import loginReducer from './login/reducer';
import { rootEpic } from './index.epics';
import { reducer as formReducer } from 'redux-form'

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__,
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }
}

const epicMiddleware = createEpicMiddleware();

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(applyMiddleware(epicMiddleware));

/* eslint-disable no-underscore-dangle */
const store = createStore(
    combineReducers({
        app: appReducers,
        login: loginReducer,
        form: formReducer
    }),
    enhancer
);

epicMiddleware.run(rootEpic);

export default store;
/* eslint-enable */