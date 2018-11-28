import { fork, all } from "redux-saga/effects";

import { sagas as loginSaga } from './login/login.sagas';

const allSagas = [
    ...loginSaga
];

// start all sagas in parallel
export default function* rootSaga() {
	yield all(allSagas.map((saga) => fork(saga)));
}