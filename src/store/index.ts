import { createStore, combineReducers } from 'redux';
import rootReducer from './reducer';
import appReducers from '../app/reducers';

/* eslint-disable no-underscore-dangle */
export const store = createStore(
    combineReducers({
        root: rootReducer,
        app: appReducers
    })
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */