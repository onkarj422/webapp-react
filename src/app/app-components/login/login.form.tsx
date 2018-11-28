import * as React from "react";
import './login.component.scss';
import TextField from '@material-ui/core/TextField';
import { FormGroup } from '@material-ui/core'

interface FormConfig {

}

export default class LoginForm extends React.Component<FormConfig, any> {
    constructor(props: FormConfig) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <FormGroup>
                    <TextField></TextField>
                </FormGroup>
            </div>
        )
    }
}