import * as React from "react";
import history from '../../history';
import { Router, Route } from 'react-router-dom';
import { App } from '../app';
import { routerActions } from './router.actions';
import Auth from '../app-containers/auth/login/auth.container';
import { User } from '../../types/user.interface';

export default class AppRouter extends React.Component<any,any> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router history={history}>
                <App>
                    <Route value={"/home"} path={"/home"} component={() => (<p>HOME</p>)}></Route>
                    <Route value={"/gallery"} path={"/gallery"} component={() => (<p>GALLERY</p>)}></Route>
                    <Route value={"/contact"} path={"/contact"} component={() => (<p>CONTACT</p>)}></Route>
                    <Route value={"/about"} path={"/about"} component={() => (<p>ABOUT</p>)}></Route>
                    <Route value={"/login"} path={"/login"} component={() => (<Auth></Auth>)}></Route>
                    <Route value={"/register"} path={"/register"} component={() => (<p>REGISTER</p>)}></Route>
                </App>
            </Router>
        )
    }
}
