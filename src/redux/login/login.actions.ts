import * as types from './login.action.types';

export const login = (data) => {
    return {
        type: types.LOGIN,
        payload: data
    }
}

export const logout = (data) => {
    return {
        type: types.LOGOUT,
        payload: data
    }
}

export const loginResponse = (response) => {
    return {
        type: types.LOGIN_RESPONSE,
        payload: response
    }
}
