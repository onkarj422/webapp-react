import * as React from "react";
import { TextField } from '@material-ui/core';
import validator from './validator';
import GridLayoutAuto from '../../../components/layout/grid/GridLayout';
import { reduxForm, submit } from 'redux-form';
import { bindActionCreators } from 'redux';
import { compose } from 'redux';
import { Fields } from 'redux-form';
import SocialLogin from "./SocialLogin";
import { connect } from 'react-redux';

interface FormProps {
    handler: Function,
    initialize: Function,
    submit: Function,
    reset: Function
}

class LoginForm extends React.Component<FormProps, any> {
    constructor(props: FormProps) {
        super(props);
        this.state = {
            fields: [
                {
                    name: 'email',
                    placeholder: 'Email',
                    label: 'Email',
                    helperText: '',
                    required: true
                },
                {
                    name: 'password',
                    placeholder: 'Password',
                    label: 'Password',
                    helperText: '',
                    required: true
                }
            ]
        }
    }
    initFields = {
        email: '',
        password: ''
    };

    componentDidMount() {
        this.props.initialize(this.initFields);
        addEventListener('keyup', (e) => {
            if (e.keyCode == 13) {
                this.props.submit('loginForm');
            }
        });
    }

    componentDidUpdate() {
        this.props.handler({
            submitForm: this.props.submit,
            resetForm: this.props.reset
        })
    }

    componentWillUnmount() {
        removeEventListener('keyup', () => {
            console.log("removed keyup");
        });
    }

    renderForm = () => {
        const { fields } = this.state;
        return (
            <form>
                <Fields names={fields.map(field => field.name)} component={this.renderWithGrid}></Fields>
            </form>
        )
    }

    renderWithGrid = (fields) => {
        return (
            <GridLayoutAuto flow="row" gap="10px" justify="stretch">
                {this.renderFields(fields)}
            </GridLayoutAuto>
        )
    }

    renderFields = (fields) => {
        return fields.names.map((field, index) => {
            const _field = this.state.fields.find(f => (f.name == field));
            return (
                <TextField
                    key={index}
                    required={_field.required}
                    fullWidth
                    placeholder={_field.placeholder}
                    name={_field.name}
                    type={_field.name}
                    label={_field.label}
                    error={fields[field].meta.touched && fields[field].meta.invalid}
                    helperText={(fields[field].meta.touched && fields[field].meta.error) || _field.helperText}
                    value={fields[field].input.value}
                    {...fields[field].input}>
                </TextField>
            )
        })
    }

    render() {
        return this.renderForm()
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        formActions: bindActionCreators({
            submit: submit
        }, dispatch)
    }
}

const configureForm = compose(
    reduxForm({
        form: 'loginForm',
        validate: validator
    }),
    connect(null, mapDispatchToProps)
);

export default configureForm(LoginForm);