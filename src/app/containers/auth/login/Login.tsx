import * as React from 'react'
import { User } from '../../../../types/user.interface';
import LoginForm from './LoginForm';
import SocialLogin from './SocialLogin';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as loginActions from '../../../../redux-epic/login/actions';
import GridLayoutAuto from '../../../components/layout/grid/GridLayout';
import { Typography, Button, Divider } from '@material-ui/core';

interface LoginProps {
    user?: User,
    auth?: any,
    actions?: any
}

class Login extends React.Component<LoginProps, any> {

    constructor(props: LoginProps) {
        super(props);
    }

    formRef;
    submitForm;
    resetForm;

    formHandler = ({ submitForm, resetForm }) => {
        this.submitForm = submitForm;
        this.resetForm = resetForm;
    }

    onClickSignIn = () => {
        this.submitForm && this.submitForm();
    }

    onClickSignOut = () => {
        this.props.actions.logout();
    }

    onSubmit = (data) => {
        this.props.actions.login(data);
    }

    renderLogin = () => {
        return (
            <GridLayoutAuto flow="row" gap="10px" justify="center" align="center">
                <SocialLogin></SocialLogin>
                <Divider />
                <LoginForm onSubmit={this.onSubmit} handler={this.formHandler} ref={form => this.formRef = form}></LoginForm>
                {(this.props.auth.status == 'incorrect') && (
                     <Typography variant="caption" color="error">Email or password is incorrect</Typography>
                )}
                <Button onClick={this.onClickSignIn} color="primary" variant="raised">SIGN IN</Button>
            </GridLayoutAuto>
        )
    }

    renderAfterLogin = (user) => {
        return (
            <GridLayoutAuto flow="row" gap="10px">
                <Typography variant="headline">Logged In!</Typography>
                <Typography variant="subheading">Name: {user.firstName} {user.lastName}</Typography>
                <Button onClick={this.onClickSignOut} color="primary" variant="raised">SIGN OUT</Button>
            </GridLayoutAuto>
        )
    }

    render() {
        const { user, auth } = this.props;
        if ((!auth.isLogin || (auth.status != 'success')) || !user) {
            return this.renderLogin();
        } else {
            return this.renderAfterLogin(user);
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
