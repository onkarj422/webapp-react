import { put, takeEvery, all, call, takeLatest } from "redux-saga/effects";
import * as types from './login.action.types';
import * as actions from './login.actions';
import * as db from '../../test-db';

export function* login(payload) {
    let user = yield db['users'].map((user, index) => {
        if (user.email == payload.email && user.password == payload.password) {
            return user;
        } else {
            return null;
        }
    });
    let response = {
        user: user,
        success: (user) ? true : false
    }
    yield put(actions.loginResponse(response));
}

export function* watchAll() {
    yield takeLatest(types.LOGIN, login);
}

export const sagas = [
    watchAll
];
