import { put, takeEvery, all, call, takeLatest } from "redux-saga/effects";
import * as types from './login.action.types';
import * as actions from './login.actions';
import * as db from '../../test-db';

export function* login(action) {
    let userObj = {};
    yield db.default.users.map((user, index) => {
        if (user.email == action.payload.email && user.password == action.payload.password) {
            userObj = user;
            return user;
        } else {
            return null;
        }
    });
    console.log(userObj);
    let response = {
        user: userObj,
        success: (userObj) ? true : false
    }
    yield put(actions.loginResponse(response));
}

export function* watchAll() {
    yield takeLatest(types.LOGIN, login);
}

export const sagas = [
    watchAll
];
