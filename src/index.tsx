import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { store } from './store/index';
import theme from './components/materialui/materialui_module';
import { App } from "./app/app";
import { MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <Router history={history}>
                <App></App>
            </Router>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById("root")
);