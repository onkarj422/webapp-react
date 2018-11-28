import * as React from 'react';
import { User } from '../../../../types/user.interface';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as loginActions from '../../../../redux/login/login.actions';

import LoginForm from './login.form';


interface AuthConfig {
    user?: User,
    auth?: boolean,
    login?: Function
}

class Auth extends React.Component<AuthConfig, any> {
    constructor(props: AuthConfig) {
        super(props);
    }

    render() {
        return (
            <LoginForm></LoginForm>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.login.user,
        auth: state.login.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({
            login: loginActions.login,
            logout: loginActions.logout
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);