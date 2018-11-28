import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import store from './redux/index.redux';
import theme from './customization/material-ui/material-ui-theme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import AppRouter from './app/app-router/router.component';

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <AppRouter></AppRouter>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById("root")
);