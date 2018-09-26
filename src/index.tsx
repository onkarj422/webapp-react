import * as React from "react";
import * as ReactDOM from "react-dom";
import theme from './custom-components/materialui/materialui_module';
import { App } from "./app/app";
import { MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, HashRouter, Route, Link } from 'react-router-dom';

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <BrowserRouter>
            <App text="React"></App>
        </BrowserRouter>
    </MuiThemeProvider>,
    document.getElementById("root")
);