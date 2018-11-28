import * as React from "react";
import { TextField, Button, withTheme, Divider } from '@material-ui/core';
import FormValidator from './form.validator';
import GridLayoutAuto from '../../../layout-components/grid/grid.layout';

type LoginConfig = {
    theme?: any
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
        let state = {...this.state};
        return state.form.findIndex((form) => (form.name == name));
    }

    setFormValidity = () => {
        this.setState((state) => ({
            isFormValid: (!state.form.find((form) => (!form.isValid || !form.value)))
        }), () => {
            this.state.isFormValid ? console.log("Valid") : console.log("Not valid");
        });
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
        }, this.setFormValidity);
    }

    buildLoginForm = () => {
        const { theme } = this.props;
        return (
            <GridLayoutAuto flow="row" gap="10px" justify="center" align="center">
                <GridLayoutAuto flow="column" gap="10px">
                    <Button variant="contained">
                        <img style={{marginRight: theme.spacing.unit}} height="24" width="24" src="https://img.icons8.com/color/50/000000/google-logo.png"></img>
                        <span>GOOGLE SIGN IN</span>
                    </Button>
                    <Button variant="contained" style={{background: '#3B5897', color: 'white'}}>
                        <img style={{marginRight: theme.spacing.unit}} height="24" width="24" src="https://img.icons8.com/material/50/ffffff/facebook-f.png"></img>
                        <span>FACEBOOK SIGN IN</span>
                    </Button>
                </GridLayoutAuto>
                <GridLayoutAuto flow="column" justify="unset" align="center">
                    <div style={{width: '100%'}}>
                        <Divider style={{width: '70%', margin: '10px auto 0px auto'}}></Divider>
                    </div>
                </GridLayoutAuto>
                <TextField
                    label="Email"
                    autoFocus
                    placeholder="Email"
                    name="email"
                    error={!(this.state.form[this.getFormIndex('email')].isValid)}
                    helperText={this.state.form[this.getFormIndex('email')].helperText}
                    fullWidth
                    type="email"
                    value={this.state.form[this.getFormIndex('email')].value}
                    onChange={this.handleInput('email')} required>
                </TextField>
                <TextField
                    label="Password"
                    placeholder="Password"
                    name="password"
                    error={!(this.state.form[this.getFormIndex('password')].isValid)}
                    helperText={this.state.form[this.getFormIndex('password')].helperText}
                    fullWidth
                    type="password"
                    value={this.state.form[this.getFormIndex('password')].value}
                    onChange={this.handleInput('password')}
                    required>
                </TextField>
                <Button onClick={this.handleSubmit} color="primary" variant="raised">SIGN IN</Button>
            </GridLayoutAuto>
        )
    }

    render() {
        return this.buildLoginForm()
    }
}

export default withTheme()(LoginForm);