import { createStore, combineReducers } from 'redux';
import rootReducer from './reducer';
import appReducers from '../app/reducers';
import menuReducer from '../components/menu/menu.reducer';

/* eslint-disable no-underscore-dangle */
export const store = createStore(
    combineReducers({
        root: rootReducer,
        app: appReducers,
        menu: menuReducer
    })
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */