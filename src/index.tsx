import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import store from './redux-epic/index.redux';
import theme from './customization/material-ui/material-ui-theme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import AppRouter from './app/router/Router';

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <AppRouter></AppRouter>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById("root")
);