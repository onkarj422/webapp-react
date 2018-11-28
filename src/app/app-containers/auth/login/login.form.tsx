import * as React from "react";
import { TextField, Button, withTheme, Divider, Typography } from '@material-ui/core';
import FormValidator from './form.validator';
import GridLayoutAuto from '../../../layout-components/grid/grid.layout';

interface LoginConfig {
    loginHandler: any
}

class LoginForm extends React.Component<LoginConfig, any> {
    constructor(props: LoginConfig) {
        super(props);
        this.state = {
            form: [
                {
                    name: 'email',
                    value: '',
                    isValid: true,
                    helperText: ''
                },
                {
                    name: 'password',
                    value: '',
                    isValid: true,
                    helperText: ''
                }
            ],
            isFormValid: false
        }
    }

    componentDidMount() {
        addEventListener('keyup', (e) => {
            if (e.keyCode == 13) {
                this.handleSubmit(e);
            }
        });
    }

    componentWillUnmount() {
        removeEventListener('keyup', () => {
            console.log("removed keyup");
        });
    }

    setFormState = ({
        name, value, isValid, helperText
    }, callback?) => {
        this.setState((state) => {
            state.form[this.getFormIndex(name)] = {
                name: name,
                value: value,
                isValid: isValid,
                helperText: helperText
            };
            return state;
        }, callback && callback);
    }

    getFormIndex = (name) => {
        let state = { ...this.state };
        return state.form.findIndex((form) => (form.name == name));
    }

    setFormValidity = (callback?) => {
        this.setState((state) => ({
            isFormValid: (!state.form.find((form) => (!form.isValid || !form.value)))
        }), callback && callback);
    }

    handleInput = name => e => {
        let validator = new FormValidator();
        if (e.target.value.length > 20) return;
        let validation = validator.validate(name, e.target.value);
        let form = [...this.state.form];
        let i = this.getFormIndex(name);
        form[i].value = e.target.value;
        form[i].isValid = validation.isValid;
        form[i].helperText = validation.errorMsg || '';
        this.setState({
            form: form
        }, this.setFormValidity);
    }

    handleSubmit = (e) => {
        let validator = new FormValidator();
        let form = [];
        let formFromState = [...this.state.form];
        formFromState.map((field) => {
            let validation = validator.validate(field.name, field.value);
            form.push({
                name: field.name,
                value: field.value,
                isValid: validation.isValid,
                helperText: validation.errorMsg || ''
            });
        });
        this.setState({
            form: form
        }, () => {
            this.setFormValidity(() => {
                (this.state.isFormValid) && this.props.loginHandler().login({
                    email: this.state.form[this.getFormIndex('email')].value,
                    password: this.state.form[this.getFormIndex('password')].value
                });
            });
        });
    }

    buildLoginForm = () => {
        const { loginHandler } = this.props;
        const { form } = this.state;
        return (
            <GridLayoutAuto flow="row" gap="10px" justify="center" align="center">
                <GridLayoutAuto flow="column" gap="10px">
                    <Button variant="contained">
                        <img style={{ marginRight: '8px' }} height="24" width="24" src="https://img.icons8.com/color/50/000000/google-logo.png"></img>
                        <span>GOOGLE SIGN IN</span>
                    </Button>
                    <Button variant="contained" style={{ background: '#3B5897', color: 'white' }}>
                        <img style={{ marginRight: '8px' }} height="24" width="24" src="https://img.icons8.com/material/50/ffffff/facebook-f.png"></img>
                        <span>FACEBOOK SIGN IN</span>
                    </Button>
                </GridLayoutAuto>
                <div style={{ width: '100%' }}>
                    <Divider style={{ width: '70%', margin: '10px auto 0px auto' }}></Divider>
                </div>
                <TextField
                    required
                    fullWidth
                    autoFocus
                    placeholder="Email"
                    name="email"
                    type="email"
                    label="Email"
                    onChange={this.handleInput('email')}
                    error={!(form[this.getFormIndex('email')].isValid)}
                    helperText={form[this.getFormIndex('email')].helperText}
                    value={form[this.getFormIndex('email')].value}>
                </TextField>
                <TextField
                    required
                    fullWidth
                    placeholder="Password"
                    name="password"
                    type="password"
                    label="Password"
                    onChange={this.handleInput('password')}
                    error={!(form[this.getFormIndex('password')].isValid)}
                    helperText={form[this.getFormIndex('password')].helperText}
                    value={form[this.getFormIndex('password')].value}>
                </TextField>
                {(loginHandler().auth.status == 'incorrect') && (
                    <Typography variant="caption" color="error">Email or password is incorrect</Typography>
                )}
                <Button onClick={this.handleSubmit} color="primary" variant="raised">SIGN IN</Button>
            </GridLayoutAuto>
        )
    }

    render() {
        return this.buildLoginForm()
    }
}

export default (LoginForm);