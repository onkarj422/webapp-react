import * as React from 'react';
import { User } from '../../../../types/user.interface';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as loginActions from '../../../../redux/login/login.actions';

import LoginForm from './login.form';
import GridLayoutAuto from '../../../layout-components/grid/grid.layout';
import { Typography } from '@material-ui/core';


interface AuthConfig {
    user?: User,
    auth?: any,
    actions?: any
}

class Auth extends React.Component<AuthConfig, any> {
    constructor(props: AuthConfig) {
        super(props);
    }

    loginHandler = () => {
        return {
            login: (formData) => {
                this.props.actions.login(formData);
            },
            auth: this.props.auth
        };
    }

    buildComponent = () => {
        const { user, auth } = this.props;
        if ((!auth.isLogin || (auth.status != 'success')) || !user) {
            return (<LoginForm loginHandler={this.loginHandler}></LoginForm>)
        } else {
            return (
                <GridLayoutAuto flow="row" gap="10px">
                    <Typography variant="headline">Logged In!</Typography>
                    <Typography variant="subheading">Name: {user.firstName} {user.lastName}</Typography>
                </GridLayoutAuto>
            )
        }
    }

    render() {
        return this.buildComponent();
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