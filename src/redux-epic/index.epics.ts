import { combineEpics } from 'redux-observable';
import loginEpic from './login/login.epic';

export const rootEpic = combineEpics(loginEpic);