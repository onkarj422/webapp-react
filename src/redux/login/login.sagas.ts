import { put, takeEvery, all, call, takeLatest } from "redux-saga/effects";
import * as types from './login.action.types';
import * as actions from './login.actions';
import * as db from '../../test-db';

export function* login(action) {
    const users = db.default.users;
    let userIndex = users.findIndex((user) => (user.email == action.payload.email && user.password == action.payload.password));
    let user = (userIndex != -1) ? users[userIndex] : undefined;
    let auth = {
        status: (!user) ? 'incorrect' : 'success',
        isLogin: (!user) ? false : true
    };
    let response = {
        user: user,
        auth: auth
    };
    yield put(actions.loginResponse(response));
}

export function* watchAll() {
    yield takeLatest(types.LOGIN, login);
}

export const sagas = [
    watchAll
];
