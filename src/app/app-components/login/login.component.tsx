import * as React from "react";
import './login.component.scss';
import LoginForm from './login.form';

interface LoginConfig {

}

class LoginComponent extends React.Component<LoginConfig, any> {
    constructor(props: LoginConfig) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <LoginForm></LoginForm>
            </div>
        )
    }
}

export default LoginComponent