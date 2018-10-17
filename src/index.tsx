import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { store } from './store/index';
import theme from './custom-components/materialui/materialui_module';
import { App } from "./app/app";
import { MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <BrowserRouter>
                <App text="React"></App>
            </BrowserRouter>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById("root")
);