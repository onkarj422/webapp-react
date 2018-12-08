import { authState } from '../states';
import * as types from './types';

const authReducer = (state = authState, action) => {
    switch(action.type) {
        case types.LOGIN_RESPONSE: {
            let _state = {...state};
            _state.auth = action.payload.auth;
            _state.user = action.payload.user;
            return _state;
        }
        case types.LOGOUT: {
            let _state = {...state};
            _state.auth = {
                isLogin: false,
                status: 'out'
            };
            _state.user = undefined;
            return _state;
        }
        default: return state;
    }
}

export default authReducer;