import { authState } from '../states';
import * as types from './login.action.types';

const authReducer = (state = authState, action) => {
    switch(action.type) {
        case types.LOGIN_RESPONSE: {
            let _state = {...state};
            _state.auth = action.payload.success;
            _state.user = action.payload.user;
            console.log(_state);
            return _state;
        }
        case types.LOGOUT: {
            let _state = {...state};
            _state.auth = false;
            _state.user = undefined;
            return _state;
        }
        default: return state;
    }
}

export default authReducer;