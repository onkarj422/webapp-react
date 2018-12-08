import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
//import { ajax } from 'rxjs/observable/dom/ajax';
import * as types from './login.action.types';
import * as actions from './login.actions';
import * as db from '../../test-db';

const loginEpic = ($action) => {
    return $action.pipe(
        ofType(types.LOGIN),
        switchMap((action) => {
            const users = db.default.users;
            let userIndex = users.findIndex((user) => (user.email == action['payload'].email && user.password == action['payload'].password));
            let user = (userIndex != -1) ? users[userIndex] : undefined;
            let auth = {
                status: (!user) ? 'incorrect' : 'success',
                isLogin: (!user) ? false : true
            };
            let response = {
                user: user,
                auth: auth
            };
            return of(response);
        }),
        map((response) => actions.loginResponse(response)),
        catchError((err) => {
            return of(err);
        })
    )
}

export default loginEpic;